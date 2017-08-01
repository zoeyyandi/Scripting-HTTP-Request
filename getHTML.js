var https = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

function getHTML (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    var buffer = "";
    response.on('data', function (data) {
      buffer += data;
      callback(buffer)  //
    });
 });
}

var printHTML = function (html) {
  console.log(html);
}
  /* Add your code here */

getHTML(options, printHTML);
