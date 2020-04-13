
(() => {

  const viewerElement = document.getElementById('viewer');

  WebViewer({
    path: '../public/lib',
    initialDoc: '../public/files/webviewer-demo-annotated.pdf',
  }, viewerElement).then(instance => {

    // Interact with APIs here.
    // See https://www.pdftron.com/documentation/web/guides/basic-functionality for more info/
  })

})()
