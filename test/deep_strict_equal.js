/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.deepStrictEqual()', function() {

	it('should not throw error for 2 undefined values', function(done) {
		var val1;
		var val2;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 null values', function(done) {
		var val1 = null;
		var val2 = null;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 NaN values', function(done) {
		var val1 = NaN;
		var val2 = NaN;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 equal boolean values', function(done) {
		var val1 = false;
		var val2 = false;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 equal number values', function(done) {
		var val1 = 12345;
		var val2 = 12345;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 equal string values', function(done) {
		var val1 = 'astring';
		var val2 = 'astring';
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Array objects with the same content', function(done) {
		var val1 = ['astring', 'another'];
		var val2 = ['astring', 'another'];
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Objects with the same keys and values', function(done) {
		var val1 = {key1: 'astring', key2: 2};
		var val2 = {key1: 'astring', key2: 2};
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Buffer objects with the same content', function(done) {
		var val1 = Buffer.from('astring');
		var val2 = Buffer.from('astring');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Date objects with the same date, time, and timezone', function(done) {
		var val1 = new Date('Mon Jun 03 2019 00:00:00 GMT-0500 (Central Daylight Time)');
		var val2 = new Date('Mon Jun 03 2019 00:00:00 GMT-0500 (Central Daylight Time)');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Error objects with the same message', function(done) {
		var val1 = new Error('Test error');
		var val2 = new Error('Test error');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Map objects with the same keys and values', function(done) {
		var val1 = new Map([['key1', 'astring'], ['key2', 2]]);
		var val2 = new Map([['key1', 'astring'], ['key2', 2]]);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Regexp objects with the same pattern', function(done) {
		var val1 = /\d+/;
		var val2 = /\d+/;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for 2 Set objects with the same values', function(done) {
		var val1 = new Set([1, 2, 3, 4, 5]);
		var val2 = new Set([1, 2, 3, 4, 5]);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for a number which loosely equals a string', function(done) {
		var val1 = 1;
		var val2 = '1';
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 unequal boolean values', function(done) {
		var val1 = false;
		var val2 = true;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 unequal number values', function(done) {
		var val1 = 12345;
		var val2 = 12346;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 unequal string values', function(done) {
		var val1 = 'astring';
		var val2 = 'adifferentstring';
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Array objects with different content', function(done) {
		var val1 = ['astring', 'another'];
		var val2 = ['adifferentstring', 'anotherdifferentstring'];
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Array objects where the second contains most but not all of the content of the first', function(done) {
		var val1 = ['astring', 'another', 'andanother'];
		var val2 = ['astring', 'another'];
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Array objects where the first contains most but not all of the content of the second', function(done) {
		var val1 = ['astring', 'another'];
		var val2 = ['astring', 'another', 'andanother'];
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Objects with different keys and values', function(done) {
		var val1 = {key1: 'astring', key2: 2};
		var val2 = {diff1: 'adifferentstring', diff2: 3};
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Objects where the second contains most but not all of the keys and values of the first', function(done) {
		var val1 = {key1: 'astring', key2: 2, key3: 'another'};
		var val2 = {key1: 'astring', key2: 2};
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Objects where the first contains most but not all of the keys and values of the second', function(done) {
		var val1 = {key1: 'astring', key2: 2};
		var val2 = {key1: 'astring', key2: 2, key3: 'another'};
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Buffer objects with different content', function(done) {
		var val1 = Buffer.from('astring');
		var val2 = Buffer.from('adifferentstring');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Buffer objects where the second contains most but not all of the content of the first', function(done) {
		var val1 = Buffer.from('astringandmore');
		var val2 = Buffer.from('astring');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Buffer objects where the first contains most but not all of the content of the second', function(done) {
		var val1 = Buffer.from('astring');
		var val2 = Buffer.from('astringandmore');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Date objects with the same date but different times', function(done) {
		var val1 = new Date('Mon Jun 03 2019 00:00:00 GMT-0500 (Central Daylight Time)');
		var val2 = new Date('Mon Jun 03 2019 01:00:00 GMT-0500 (Central Daylight Time)');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Error objects with different messages', function(done) {
		var val1 = new Error('Test error');
		var val2 = new Error('Test different error');
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Map objects with different keys and values', function(done) {
		var val1 = new Map([['key1', 'astring'], ['key2', 2]]);
		var val2 = new Map([['diff1', 'adifferentstring'], ['diff2', 3]]);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Map objects where the second contains most but not all of the keys and values of the first', function(done) {
		var val1 = new Map([['key1', 'astring'], ['key2', 2], ['key3', 'another']]);
		var val2 = new Map([['key1', 'astring'], ['key2', 2]]);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Map objects where the first contains most but not all of the keys and values of the second', function(done) {
		var val1 = new Map([['key1', 'astring'], ['key2', 2]]);
		var val2 = new Map([['key1', 'astring'], ['key2', 2], ['key3', 'another']]);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Regexp objects with different patterns', function(done) {
		var val1 = /\d+/;
		var val2 = /\d+/g;
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Set objects with different values', function(done) {
		var val1 = new Set(['astring', 'another']);
		var val2 = new Set(['adifferentstring', 'anotherdifferentstring']);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Set objects where the second contains most but not all of the values of the first', function(done) {
		var val1 = new Set(['astring', 'another', 'andanother']);
		var val2 = new Set(['astring', 'another']);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for 2 Set objects where the first contains most but not all of the values of the second', function(done) {
		var val1 = new Set(['astring', 'another']);
		var val2 = new Set(['astring', 'another', 'andanother']);
		try {
			Assert.deepStrictEqual('val1', val1, val2);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
