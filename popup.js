const t = document.getElementById('t');
chrome.storage.sync.get({ enabled: true }, d => t.checked = d.enabled);
t.onchange = () => chrome.storage.sync.set({ enabled: t.checked });
