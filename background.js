chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "searchDivs") {
	  chrome.tabs.executeScript(null, { file: "content.js" });
	}
  });
