/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.strictEqual()', function() {

	it('should not throw error for 2 undefined values', function(done) {
		var val1;
		var val2;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 null values', function(done) {
		var val1 = null;
		var val2 = null;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 NaN values', function(done) {
		var val1 = NaN;
		var val2 = NaN;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 equal boolean values', function(done) {
		var val1 = false;
		var val2 = false;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 equal number values', function(done) {
		var val1 = 12345;
		var val2 = 12345;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 equal string values', function(done) {
		var val1 = 'astring';
		var val2 = 'astring';
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for 2 unequal boolean values', function(done) {
		var val1 = false;
		var val2 = true;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 unequal number values', function(done) {
		var val1 = 12345;
		var val2 = 12346;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 unequal string values', function(done) {
		var val1 = 'astring';
		var val2 = 'adifferentstring';
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Array objects with the same content', function(done) {
		var val1 = ['astring', 'another'];
		var val2 = ['astring', 'another'];
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Objects with the same keys and values', function(done) {
		var val1 = {key1: 'astring', key2: 2};
		var val2 = {key1: 'astring', key2: 2};
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Buffer objects with the same content', function(done) {
		var val1 = Buffer.from('astring');
		var val2 = Buffer.from('astring');
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Date objects with the same date and time', function(done) {
		var val1 = new Date('Mon Jun 03 2019 00:00:00 GMT-0500 (Central Daylight Time)');
		var val2 = new Date('Mon Jun 03 2019 00:00:00 GMT-0500 (Central Daylight Time)');
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Error objects with the same message', function(done) {
		var val1 = new Error('Test error');
		var val2 = new Error('Test error');
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Map objects with the same keys and values', function(done) {
		var val1 = new Map([['key1', 'astring'], ['key2', 2]]);
		var val2 = new Map([['key1', 'astring'], ['key2', 2]]);
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Regexp objects with the same pattern', function(done) {
		var val1 = /\d+/;
		var val2 = /\d+/;
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Set objects with the same values', function(done) {
		var val1 = new Set(['astring', 'another']);
		var val2 = new Set(['astring', 'another']);
		try {
			Assert.strictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
