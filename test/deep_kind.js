/* eslint-env mocha */
'use strict';

var Assert = require('..');

describe('Assert.deepKind()', function() {

	it('should support kind \'undefined\'', function(done) {
		var val;
		var kind = 'undefined';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'null\'', function(done) {
		var val = null;
		var kind = 'null';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	// it('should support kind \'NaN\'', function(done) {
	// 	var val = NaN;
	// 	var kind = 'NaN';
	// 	try {
	// 		Assert.deepKind('val', val, kind);
	// 	} catch (err) {
	// 		return done(new Error(`Expected no error to be thrown but caught: ${err}`));
	// 	}
	// 	done();
	// });

	it('should support kind \'boolean\'', function(done) {
		var val = false;
		var kind = 'boolean';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'number\'', function(done) {
		var val = 12345;
		var kind = 'number';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'string\'', function(done) {
		var val = 'astring';
		var kind = 'string';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'array\'', function(done) {
		var val = ['astring', 'another'];
		var kind = 'array';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'object\'', function(done) {
		var val = {key1: 'astring', key2: 2};
		var kind = 'object';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'buffer\'', function(done) {
		var val = Buffer.from('astring');
		var kind = 'buffer';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'date\'', function(done) {
		var val = new Date('Mon Jun 03 2019 00:00:00 GMT-0500 (Central Daylight Time)');
		var kind = 'date';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'error\'', function(done) {
		var val = new Error('Test error');
		var kind = 'error';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'map\'', function(done) {
		var val = new Map([['key1', 'astring'], ['key2', 2]]);
		var kind = 'map';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'regexp\'', function(done) {
		var val = /\d+/;
		var kind = 'regexp';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'set\'', function(done) {
		var val = new Set([1, 2, 3, 4, 5]);
		var kind = 'set';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should support kind \'arguments\'', function(done) {
		var val = arguments;
		var kind = 'arguments';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should throw error for unsupported kind', function(done) {
		var val = 1;
		var kind = true;
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should not throw error for Array structure with correct kinds', function(done) {
		var val = ['astring', 12345];
		var kind = ['string', 'number'];
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for Object structure with correct kinds', function(done) {
		var val = {key1: 'astring', key2: 2};
		var kind = {key1: 'string', key2: 'number'};
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not throw error for Map structure with correct kinds', function(done) {
		var val = new Map([['key1', 'astring'], ['key2', 2]]);
		var kind = new Map([['key1', 'string'], ['key2', 'number']]);
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done(new Error(`Expected no error to be thrown but caught: ${err}`));
		}
		done();
	});

	it('should not support Set structure', function(done) {
		var val = new Set([1, 2, 3, 4, 5]);
		var kind = new Set(['number', 'number', 'number', 'number', 'number']);
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for flat structure with incorrect kind', function(done) {
		var val = 1;
		var kind = '1';
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Array structure with incorrect kinds', function(done) {
		var val = ['astring', 'another'];
		var kind = ['string', 'number'];
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Array structure where the expected contains most but not all of the content of the actual', function(done) {
		var val = ['astring', 'another', 'andanother'];
		var kind = ['string', 'string'];
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Array structure where the actual contains most but not all of the content of the expected', function(done) {
		var val = ['astring', 'another'];
		var kind = ['string', 'string', 'string'];
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Object structure with incorrect kinds', function(done) {
		var val = {key1: 'astring', key2: 2};
		var kind = {key1: 'string', key2: 'string'};
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Object structure with different keys', function(done) {
		var val = {key1: 'astring', key2: 2};
		var kind = {diff1: 'string', diff2: 'number'};
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Object structure where the expected contains most but not all of the keys and values of the actual', function(done) {
		var val = {key1: 'astring', key2: 2, key3: 'another'};
		var kind = {key1: 'string', key2: 'number'};
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Object structure where the actual contains most but not all of the keys and values of the expected', function(done) {
		var val = {key1: 'astring', key2: 2};
		var kind = {key1: 'string', key2: 'number', key3: 'string'};
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Map structure with incorrect kinds', function(done) {
		var val = new Map([['key1', 'astring'], ['key2', 2]]);
		var kind = new Map([['key1', 'string'], ['key2', 'object']]);
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Map structure with different keys', function(done) {
		var val = new Map([['key1', 'astring'], ['key2', 2]]);
		var kind = new Map([['diff1', 'string'], ['diff2', 'number']]);
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Map structure where the expected contains most but not all of the keys and values of the actual', function(done) {
		var val = new Map([['key1', 'astring'], ['key2', 2], ['key3', 'another']]);
		var kind = new Map([['key1', 'string'], ['key2', 'number']]);
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});

	it('should throw error for Map structure where the actual contains most but not all of the keys and values of the expected', function(done) {
		var val = new Map([['key1', 'astring'], ['key2', 2]]);
		var kind = new Map([['key1', 'string'], ['key2', 'number'], ['key3', 'string']]);
		try {
			Assert.deepKind('val', val, kind);
		} catch (err) {
			return done();
		}
		done(new Error('Expected an error to be thrown but none was'));
	});
});
