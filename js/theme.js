// Dark/light mode toggle; keeps Giscus comments in sync
(function () {
  var root = document.documentElement;
  var button = document.getElementById('theme-toggle');

  function syncButton() {
    if (button) button.innerHTML = root.getAttribute('data-theme') === 'dark' ? '&#9728;' : '&#9790;';
  }

  function syncGiscus(theme) {
    var frame = document.querySelector('iframe.giscus-frame');
    if (frame) {
      frame.contentWindow.postMessage({ giscus: { setConfig: { theme: theme } } }, 'https://giscus.app');
    }
  }

  syncButton();
  if (!button) return;
  button.addEventListener('click', function () {
    var theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    syncButton();
    syncGiscus(theme);
  });
})();
