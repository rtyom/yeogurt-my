/*eslint no-unused-expressions:0 */
'use strict';

var Field = require('../field');

describe('Field View', function() {

  beforeEach(function() {
    this.field = new Field();
  });

  it('Should run a few assertions', function() {
    expect(this.field).to.exist;
  });

});
