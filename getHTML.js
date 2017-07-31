// var https = require('https');

// var options = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step3.html'
//   };

// var callback = function (response) {
//     response.setEncoding('utf8');

//   var buffer = "";
//     response.on('data', function (data) {
//       buffer += data;
//       console.log(buffer)
//     });
//  };

// function PrintHTML (options, callback) {
//      https.get(options, callback)

//   /* Add your code here */
// }

// PrintHTML(options, callback);



var https = require('https');

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function printHTML (html) {
  console.log(html);
}

function getAndPrintHTML2 (options, callback) {


  https.get(options, function (response) {
    response.setEncoding('utf8');

  var buffer = "";

  response.on('data', function (data) {
    buffer += data;
  });

  response.on('end', function() {
    callback(buffer)
  })
 });

  /* Add your code here */
}

getAndPrintHTML2(options, printHTML);
getAndPrintHTML2(options, function(buffer) {
  console.log(buffer.length)
});


