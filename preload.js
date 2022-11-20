const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  // Print function
  print: (arg) => ipcRenderer.invoke("print", arg),
});

ipcRenderer.on("webview-used", () => {
  const webview = document.createElement("webview");
  webview.setAttribute("src", "about:blank");
  document.body.appendChild(webview);
});
