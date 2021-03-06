/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isGreaterThan()', function() {

	it('should throw error when the first value is less than the second', function(done) {
		var val = 4;
		var bar = 5;
		try {
			Assert.isGreaterThan('val', val, bar);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error when the first value is equal to the second', function(done) {
		var val = 5;
		var bar = 5;
		try {
			Assert.isGreaterThan('val', val, bar);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error when the first value is greater than the second', function(done) {
		var val = 6;
		var bar = 5;
		try {
			Assert.isGreaterThan('val', val, bar);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});
});
