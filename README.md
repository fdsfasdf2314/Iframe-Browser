# iFrame Browser

## Description

iFrame Browser is a browser tool that runs off iFrames.

## Build

iFrame browser uses the following JavaScript to convert the users URL into a iFrame element:

`
function loadIframe(){let url=document.getElementById('urlInput').value;if(!url.startsWith('https://')){url='https://'+url;}const iframe = document.getElementById('previewIframe');iframe.src = url;
  iframe.style.display = 'block';
  iframe.requestFullscreen();
  document.getElementById('container').style.display = 'none';
}
`

