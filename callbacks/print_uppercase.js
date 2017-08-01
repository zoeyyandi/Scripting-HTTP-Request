var getHTML = require('../http-functions');
var lodash = require('lodash')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var printUppercase = function (html) {
  console.log(lodash.toUpper(html));
}

getHTML(requestOptions, printUppercase)