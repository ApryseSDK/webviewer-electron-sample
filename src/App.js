

(() => {

  const viewerElement = document.getElementById('viewer');
  
  const viewer = new window.PDFTron.WebViewer({
    path: '../public/lib',
    l: atob(window.licenseKey)
  }, viewerElement)

  viewerElement.addEventListener('ready', () => {
    const instance = viewer.getInstance();

    // Interact with APIs here.
    // See https://www.pdftron.com/documentation/web/guides/basic-functionality for more info/
  })

})()