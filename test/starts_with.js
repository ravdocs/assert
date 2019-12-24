/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.startsWith()', function() {

	it('should throw error when the actual value does not start with the prefix', function(done) {
		var actual = 'astring';
		var prefix = 'zzz';
		try {
			Assert.startsWith('actual', actual, prefix);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error when the actual value starts with the prefix', function(done) {
		var actual = 'astring';
		var prefix = 'ast';
		try {
			Assert.startsWith('actual', actual, prefix);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error when the actual value is null', function(done) {
		var actual = null;
		var prefix = 'ast';
		try {
			Assert.startsWith('actual', actual, prefix);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
