/*eslint no-unused-expressions:0 */
'use strict';

var Bootstrap = require('../bootstrap');

describe('Bootstrap View', function() {

  beforeEach(function() {
    this.bootstrap = new Bootstrap();
  });

  it('Should run a few assertions', function() {
    expect(this.bootstrap).to.exist;
  });

});
