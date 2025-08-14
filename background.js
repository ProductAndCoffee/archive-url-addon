// This function is injected into the page to show a notification.
function showNotification(message, backgroundColor) {
  const div = document.createElement('div');
  div.textContent = message;
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.right = '20px';
  div.style.background = backgroundColor;
  div.style.color = '#fff';
  div.style.padding = '10px 20px';
  div.style.borderRadius = '5px';
  div.style.zIndex = '9999';
  div.style.fontSize = '16px';
  div.style.fontFamily = 'sans-serif';
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}

chrome.action.onClicked.addListener(async (tab) => {
  const url = tab.url;
  // Do not run on empty tabs or internal browser pages.
  if (!url || !url.startsWith('http')) {
    return;
  }
  const api = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;

  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    if (data.archived_snapshots?.closest?.available) {
      const archiveUrl = new URL(data.archived_snapshots.closest.url);
      archiveUrl.protocol = 'https:';
      chrome.tabs.update(tab.id, { url: archiveUrl.href });
    } else {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: showNotification,
        args: ["No archived copy found.", '#222']
      });
    }
  } catch (error) {
    console.error("Error checking archive:", error);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: showNotification,
      args: ["Error: Could not check archive.", '#f44336']
    });
  }
});