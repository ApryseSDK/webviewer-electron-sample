
(() => {

  const viewerElement = document.getElementById('viewer');
  
  const viewer = new window.PDFTron.WebViewer({
    path: '../public/lib',
    initialDoc: '../public/files/webviewer-demo-annotated.pdf',
  }, viewerElement)

  viewerElement.addEventListener('ready', () => {
    const instance = viewer.getInstance();

    // Interact with APIs here.
    // See https://www.pdftron.com/documentation/web/guides/basic-functionality for more info/
  })

})()