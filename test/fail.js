/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.fail()', function() {

	it('should throw error when `message` is not provided', function(done) {
		try {
			Assert.fail();
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error when `message` is provided', function(done) {
		var message = 'An error occurred.';
		try {
			Assert.fail(message);
		} catch (err) {
			if (err.message !== message) return done(new Error(`Expected 'err.message' to be '${message}' but got '${err.message}'`));
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
