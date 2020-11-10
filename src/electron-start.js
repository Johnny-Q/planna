const {app, BrowserWindow} = require('electron');

app.on("ready", function(){
    //create the main window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadURL("http://localhost:3000");
});