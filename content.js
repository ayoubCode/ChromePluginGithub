if (/\/pull\/\d+\/(files|changes)/.test(location.pathname)) {
  const url = new URL(location.href);
  if (!url.searchParams.has('w')) {
    chrome.storage.sync.get({ enabled: true }, ({ enabled }) => {
      if (enabled) {
        url.searchParams.set('w', '1');
        location.replace(url.href);
      }
    });
  }
}
