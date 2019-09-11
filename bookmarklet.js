var req = new XMLHttpRequest();
req.onreadystatechange = function() {
  if (req.readyState == 4) {
    if (req.status == 200) {
      let head = document.getElementsByTagName('head');
      let style = document.createElement('style');
      div.textContent = req.responseText;
      head.appendChild(style)
    } else {
      window.alert("request failed")
    }
  }
}
req.open('GET', 'https://raw.githubusercontent.com/kiriu-j/slack-dark-theme/master/dark-theme.css', true);
req.send(null);