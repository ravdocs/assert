/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isMap()', function() {

	it('should not throw error for a value of kind \'map\'', function(done) {
		var val = new Map([['key1', 'astring']]);
		try {
			Assert.isMap('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a value not of kind \'map\'', function(done) {
		var val = 'astring';
		try {
			Assert.isMap('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
