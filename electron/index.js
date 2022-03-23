//Import electron
const {app, BrowserWindow } = require('electron')
const path = require('path')
const { exec } = require('child_process')
const { wait } = require('@testing-library/react')
const { url } = require('url')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 900,
        titleBarStyle: 'hiddenInset',
        hasShadow: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
          }
    })
    // Not https but localhost
    win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  setTimeout(() => {
    createWindow()
  }, 2000)


  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

//Check if the url orig in http://localhost:3000 <- react app runngin on localhost
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (event, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl)

    if (parsedUrl. rigin !== 'http://localhost:3000') {
      event.preventDefault()
    }
  })
})