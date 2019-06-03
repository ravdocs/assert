/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isBoolean()', function() {

	it('should not throw error for a value of kind \'boolean\'', function(done) {
		var val = false;
		try {
			Assert.isBoolean('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a value not of kind \'boolean\'', function(done) {
		var val = 'astring';
		try {
			Assert.isBoolean('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
