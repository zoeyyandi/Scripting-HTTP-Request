var https = require('https');

var getHTML = function (options, callback) {

  https.get(options, function (response) {
    response.setEncoding('utf8');

    var buffer = "";
    response.on('data', function (data) {
      buffer += data;
      callback(buffer)  //
    });
 });
}

module.exports = getHTML