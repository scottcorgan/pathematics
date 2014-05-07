var pathetic = require('pathetic');
var reverend = require('reverend');

module.exports = function (map, url) {
  if (!url) return parse;
  
  return parse(url);
  
  function parse (url) {
    var data = pathetic(map);
    var segment = data(url);
    
    return reverend(segment.value, segment.params);
  }
};