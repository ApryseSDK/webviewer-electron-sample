const { dialog } = require("electron").remote;
const path = require("path");
const fs = require("fs");

const viewerElement = document.getElementById("viewer");

const openFileBtn = document.getElementById("open");
const saveFileBtn = document.getElementById("save");

WebViewer(
  {
    path: "../public/lib",
    initialDoc: "../public/files/webviewer-demo-annotated.pdf",
  },
  viewerElement
).then((instance) => {
  // Interact with APIs here.
  // See https://www.pdftron.com/documentation/web for more info
  instance.setTheme("dark");
  instance.disableElements(['downloadButton']);

  const { docViewer, annotManager } = instance;

  openFileBtn.onclick = async () => {
    const file = await dialog.showOpenDialog({
      properties: ["openFile", "multiSelections"],
      filters: [
        { name: "Documents", extensions: ["pdf", "docx", "pptx", "xlsx"] },
        { name: "Images", extensions: ["png", "jpg"] },
      ],
    });

    if (!file.canceled) {
      instance.loadDocument(file.filePaths[0]);
    }
  };

  saveFileBtn.onclick = async () => {
    const file = await dialog.showOpenDialog({
      title: "Select where you want to save the PDF",
      buttonLabel: "Save",
      filters: [
        {
          name: "PDF",
          extensions: ["pdf"],
        },
      ],
      properties: ["openDirectory"],
    });

    if (!file.canceled) {
      const doc = docViewer.getDocument();
      const xfdfString = await annotManager.exportAnnotations();
      const data = await doc.getFileData({
        // saves the document with annotations in it
        xfdfString,
      });
      const arr = new Uint8Array(data);
      
      fs.writeFile(
        `${file.filePaths[0].toString()}/annotated.pdf`,
        arr,
        function (err) {
          if (err) throw err;
          console.log("Saved!");
        }
      );
    }
  };
});
