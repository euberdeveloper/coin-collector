const { remote } = require('electron');
const version = remote.app.getVersion();
const element = document.getElementById('version');
element.innerHTML = version;