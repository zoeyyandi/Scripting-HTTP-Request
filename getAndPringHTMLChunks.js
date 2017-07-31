var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    var emptyString = ""
    response.on('data', function (data) {
      emptyString += data + '\n'
      console.log(emptyString)
    })

    response.on('end', function() {
      console.log('response stream complete.');
    });

 });

  /* Add your code here */

}

getAndPrintHTMLChunks()