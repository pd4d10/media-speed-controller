chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message) {
    case 'get':
      chrome.tabs.executeScript(
        {
          file: 'inject.js',
        },
        result => {
          console.log(result)
          sendResponse(result[0])
        }
      )
    case 'set':
      chrome.tabs.executeScript({
        file: 'set.js',
      })
  }
})
