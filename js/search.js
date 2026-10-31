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
    return '<span class="post-item-snippet">' + escape(text) + '</span>';
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
            var meta = p.date + (p.tags.length ? ' · ' + p.tags[0] : '');
            return '<li class="post-item"><a href="' + p.url + '">' +
              '<span class="post-item-title">' + escape(p.title) + '</span>' +
              '<span class="post-item-meta">' + escape(meta) + '</span>' +
              snippet(p, terms[0]) + '</a></li>';
          }).join('')
        : '<li class="post-item"><span class="post-item-meta">Sonuç bulunamadı.</span></li>';
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
