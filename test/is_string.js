/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isString()', function() {

	it('should not throw error for a value of kind \'string\'', function(done) {
		var val = '1';
		try {
			Assert.isString('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a value not of kind \'string\'', function(done) {
		var val = 1;
		try {
			Assert.isString('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
