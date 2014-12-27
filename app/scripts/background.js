(function (chrome) {
  chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('/views/index.html', {
      'bounds': {
        'width': 400,
        'height': 500
      }
    });
  });
})(chrome);