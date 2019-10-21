/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.throws()', function() {

	it('should not throw error when `fn` throws an error', function(done) {
		function fn() {
			throw new Error('Correct error');
		}
		try {
			Assert.throws(fn);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error when `error` does not match error thrown by `fn`', function(done) {
		function fn() {
			throw new Error('Incorrect error');
		}
		var error = {message: 'Correct error'};
		try {
			Assert.throws(fn, error);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error when `error` matches error thrown by `fn`', function(done) {
		function fn() {
			throw new Error('Correct error');
		}
		var error = {message: 'Correct error'};
		try {
			Assert.throws(fn, error);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});
});
