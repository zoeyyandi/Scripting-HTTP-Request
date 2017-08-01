var getHTML = require('../http-functions');
var lodash = require('lodash')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

var printLowercase = function (html) {
  console.log(lodash.toLower(html));
}

getHTML(requestOptions, printLowercase)