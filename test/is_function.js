/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isFunction()', function() {

	it('should not throw error for a value of kind \'function\'', function(done) {
		var val = function() {}; // eslint-disable-line no-empty-function
		try {
			Assert.isFunction('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a value not of kind \'function\'', function(done) {
		var val = 'astring';
		try {
			Assert.isFunction('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
