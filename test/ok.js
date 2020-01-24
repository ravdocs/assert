/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.ok()', function() {

	it('should throw error when the actual value is falsy', function(done) {
		var actual = 0;
		try {
			Assert.ok('actual', actual);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error when the actual value is truthy', function(done) {
		var actual = 1;
		try {
			Assert.ok('actual', actual);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});
});
