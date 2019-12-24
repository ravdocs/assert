/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.includes()', function() {

	it('should throw error when the actual value is a string and does not include the needle', function(done) {
		var actual = 'astring';
		var needle = 'zzz';
		try {
			Assert.includes('actual', actual, needle);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
	it('should not throw error when the actual value is a string and includes the needle', function(done) {
		var actual = 'astring';
		var needle = 'str';
		try {
			Assert.includes('actual', actual, needle);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error when the actual value is an array and does not include the needle', function(done) {
		var actual = ['astring', 1];
		var needle = 2;
		try {
			Assert.includes('actual', actual, needle);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
	it('should not throw error when the actual value is an array and includes the needle', function(done) {
		var actual = ['astring', 1];
		var needle = 1;
		try {
			Assert.includes('actual', actual, needle);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error when the actual value is null', function(done) {
		var actual = null;
		var needle = 'str';
		try {
			Assert.includes('actual', actual, needle);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
