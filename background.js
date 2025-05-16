chrome.browserAction.onClicked.addListener(function(tab) {
  const url = tab.url;
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;

  fetch(api)
    .then(response => response.json())
    .then(data => {
      if (
        data.archived_snapshots &&
        data.archived_snapshots.closest &&
        data.archived_snapshots.closest.available
      ) {
        let archiveUrl = data.archived_snapshots.closest.url;
        // Enforce HTTPS
        archiveUrl = archiveUrl.replace(/^http:/, 'https:');
        chrome.tabs.update(tab.id, { url: archiveUrl });
      } else {
        chrome.tabs.executeScript(tab.id, { file: "content-script.js" });
      }
    })
    .catch(() => {
      chrome.tabs.executeScript(tab.id, {
        code: 'alert("Error checking archive.");'
      });
    });
});