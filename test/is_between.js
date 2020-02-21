/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.isBetween()', function() {

	it('should throw error when `actual` is less than `min`', function(done) {
		var val = 1;
		var min = 2;
		var max = 5;
		try {
			Assert.isBetween('val', val, min, max);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
	it('should throw error when `actual` is greater than `max`', function(done) {
		var val = 6;
		var min = 2;
		var max = 5;
		try {
			Assert.isBetween('val', val, min, max);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error when `actual` is greater than `min`', function(done) {
		var val = 3;
		var min = 2;
		var max = 5;
		try {
			Assert.isBetween('val', val, min, max);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});
	it('should not throw error when `actual` is less than `max`', function(done) {
		var val = 4;
		var min = 2;
		var max = 5;
		try {
			Assert.isBetween('val', val, min, max);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error when `actual` equals `min`', function(done) {
		var val = 2;
		var min = 2;
		var max = 5;
		try {
			Assert.isBetween('val', val, min, max);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});
	it('should not throw error when `actual` equals `max`', function(done) {
		var val = 5;
		var min = 2;
		var max = 5;
		try {
			Assert.isBetween('val', val, min, max);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});
});
