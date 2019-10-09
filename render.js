const screenshot = require('screenshot-desktop');
const dateFormat = require('dateformat');
const $ = require('jquery');

let settings = {
    timeout: 5,
    use: false,
    path: __dirname + '/out/'
}

function createScreenshot() {
    let now = new Date();
    let outName = __dirname + '/out/' + dateFormat(now, "yyyy_mm_dd_HH_MM_ss") + '.png';
    screenshot({ filename: outName });
    //document.getElementById('statusalert').textContent = "Save screenshot " + outName;
    $('#statusalert')[0].textContent = "Save screenshot " + outName;
}
