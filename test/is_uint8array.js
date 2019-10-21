/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isUint8Array()', function() {

	it('should not throw error for a value of kind \'uint8array\'', function(done) {
		var val = new Uint8Array();
		try {
			Assert.isUint8Array('val', val);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a value not of kind \'uint8array\'', function(done) {
		var val = 'astring';
		try {
			Assert.isUint8Array('val', val);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
