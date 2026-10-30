// Client-side full-text search over /search.json for the blog page
(function () {
  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var list = document.getElementById('post-list');
  if (!input) return;

  var posts = null;
  var lower = function (s) { return (s || '').toLocaleLowerCase('tr'); };

  function load() {
    if (posts) return Promise.resolve(posts);
    return fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        posts = data.map(function (p) {
          p.haystack = lower(p.title + ' ' + p.tags.join(' ') + ' ' + p.content);
          return p;
        });
        return posts;
      });
  }

  function escape(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function snippet(post, term) {
    var i = lower(post.content).indexOf(term);
    if (i < 0) return '';
    var start = Math.max(0, i - 60);
    var text = (start > 0 ? '…' : '') + post.content.substr(start, 160) + '…';
    return '<br><small class="text-muted">' + escape(text) + '</small>';
  }

  function render(query) {
    var terms = lower(query).trim().split(/\s+/).filter(Boolean);
    if (!terms.length) {
      results.hidden = true;
      list.hidden = false;
      return;
    }
    load().then(function (all) {
      var hits = all.filter(function (p) {
        return terms.every(function (t) { return p.haystack.indexOf(t) >= 0; });
      });
      results.innerHTML = hits.length
        ? hits.map(function (p) {
            return '<li><span>' + escape(p.date) + '</span> » <a href="' + p.url + '">' +
              escape(p.title) + '</a>' + snippet(p, terms[0]) + '</li>';
          }).join('')
        : '<li>Sonuç bulunamadı.</li>';
      results.hidden = false;
      list.hidden = true;
    });
  }

  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { render(input.value); }, 150);
  });
})();
