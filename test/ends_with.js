/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.endsWith()', function() {

	it('should throw error when the actual value does not end with the suffix', function(done) {
		var actual = 'astring';
		var suffix = 'zzz';
		try {
			Assert.endsWith('actual', actual, suffix);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error when the actual value ends with the suffix', function(done) {
		var actual = 'astring.ext';
		var suffix = '.ext';
		try {
			Assert.endsWith('actual', actual, suffix);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error when the actual value is null', function(done) {
		var actual = null;
		var suffix = '.ext';
		try {
			Assert.endsWith('actual', actual, suffix);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
