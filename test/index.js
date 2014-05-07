var expect = require('chai').expect;
var pathematics = require('../index.js');
var pathMap = {
  '/test/:segment': '/new/:segment'
};

describe('pathematics', function () {
  
  it('parses the url from the path map', function () {
    var url = pathematics(pathMap, '/test/route');
    expect(url).to.equal('/new/route');
  });
  
  it('parses urls with no segments', function () {
    var url = pathematics({'/test': '/new'}, '/test');
    expect(url).to.equal('/new');
  });
  
  it('returns a partial function if url argument is omitted', function () {
    var parse = pathematics(pathMap);
    var url = parse('/test/route');
    expect(url).to.equal('/new/route');
  });
  
});