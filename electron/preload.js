const { exec } = require('child_process')

window.addEventListener('DOMContentLoaded', () => {
    exec('npm run-script run')
    exec('npm run-script server')
    const replaceText = (selector, text) => {
        const element = document.getElementById('selector')
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})