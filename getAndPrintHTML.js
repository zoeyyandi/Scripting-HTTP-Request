// var https = require('https');

// function getAndPrintHTML () {

//   var requestOptions = {
//     host: 'sytantris.github.io',
//     path: '/http-examples/step2.html'
//   };

//   https.get(requestOptions, function (response) {
//     response.setEncoding('utf8');

//     var buffer = "";
//     response.on('data', function (data) {
//       buffer += data;
//       console.log(buffer)
//     });
//  });

//   /* Add your code here */
// }

// getAndPrintHTML();







const https = require('https')


function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


  https.get(requestOptions, function (response) {
    response.setEncoding('utf8')
    let buffer = ""
    response.on('data', function (data) {
      buffer += data
    })
    response.on('end', function() { 
      console.log(buffer)
    })
  
  })

}

getAndPrintHTML ()







