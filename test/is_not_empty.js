/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isNotEmpty()', function() {

	it('should not throw error for a non-empty value', function(done) {
		var val = 'astring';
		try {
			Assert.isNotEmpty('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for an empty value', function(done) {
		var val = '';
		try {
			Assert.isNotEmpty('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
