/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isPromise()', function() {

	it('should not throw error for a value of kind \'promise\'', function(done) {
		var val = new Promise(function(resolve) {
			resolve();
		});
		try {
			Assert.isPromise('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a value not of kind \'promise\'', function(done) {
		var val = 'astring';
		try {
			Assert.isPromise('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
