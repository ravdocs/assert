'use strict';

var Prove = require('provejs-params');
var Assert = require('assert');
var KindOf = require('kind-of');
var _ = {};
_.isEmpty = require('lodash.isempty');

exports.strictEqual = function(label, actual, expected) {
	Prove('S**', arguments);
	Assert.ok(Object.is(actual, expected), `Expected '${label}' to be '${expected}' but got '${actual}'.`);
};

exports.deepStrictEqual = function(label, actual, expected) {

	Prove('s**', arguments);

	var expectedKind = KindOf(expected);

	exports._isKind(label, actual, expectedKind);

	switch (expectedKind) {

		case 'date': return exports._deepStrictEqualDate(label, actual, expected);
		case 'error': return exports._deepStrictEqualError(label, actual, expected);
		case 'buffer': return exports._deepStrictEqualBuffer(label, actual, expected);
		case 'array': return exports._deepStrictEqualArray(label, actual, expected);
		case 'object': return exports._deepStrictEqualObject(label, actual, expected);
		case 'arguments': return exports._deepStrictEqualArguments(label, actual, expected);
		case 'regexp': return exports._deepStrictEqualRegexp(label, actual, expected);
		case 'map': return exports._deepStrictEqualMap(label, actual, expected);
		case 'set': return exports._deepStrictEqualSet(label, actual, expected);
		default: return exports.strictEqual(label, actual, expected);
	}
};

exports._deepStrictEqualDate = function(label, actual, expected) {
	Prove('SOO', arguments);
	actual = actual.toString();
	expected = expected.toString();
	exports.strictEqual(label, actual, expected);
};

exports._deepStrictEqualError = function(label, actual, expected) {
	Prove('SEE', arguments);
	actual = actual.toString();
	expected = expected.toString();
	exports.strictEqual(label, actual, expected);
};

exports._deepStrictEqualBuffer = function(label, actual, expected) {
	Prove('S**', arguments);
	Assert.ok((actual.equals(expected)), `Expected '${label}' to be '${expected}' but got '${actual}'.`);
};

exports._deepStrictEqualRegexp = function(label, actual, expected) {
	Prove('S**', arguments);
	actual = actual.toString();
	expected = expected.toString();
	exports.strictEqual(label, actual, expected);
};

exports._deepStrictEqualArray = function(label, actual, expected) {

	Prove('SAA', arguments);

	Assert.ok((actual.length === expected.length), `Expected '${label}.length' to be '${expected.length}' but got '${actual.length}'.`);

	expected.forEach(function(expectedVal, i) {
		var actualVal = actual[i];
		exports.deepStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	});
};

exports._deepStrictEqualMap = function(label, actual, expected) {

	Prove('S**', arguments);

	Assert.ok((actual.size === expected.size), `Expected '${label}.size' to be '${expected.size}' but got '${actual.size}'.`);

	expected.forEach(function(expectedVal, key) {
		var actualVal = actual.get(key);
		exports.deepStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});

	actual.forEach(function(actualVal, key) {
		Assert.ok((expected.has(key)), `Expected '${label}' not to have key '${key}' but it does.`);
	});
};

exports._deepStrictEqualSet = function(label, actual, expected) {

	Prove('S**', arguments);

	Assert.ok((actual.size === expected.size), `Expected '${label}.size' to be '${expected.size}' but got '${actual.size}'.`);

	var actualIter = actual.values();
	var expectedIter = expected.values();
	var i;

	for (i = 0; i < actual.size; i++) {
		var actualVal = actualIter.next().value;
		var expectedVal = expectedIter.next().value;
		exports.deepStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	}
};

exports._deepStrictEqualObject = function(label, actual, expected) {

	Prove('S**', arguments);

	var actualKeys = Object.keys(actual);
	var expectedKeys = Object.keys(expected);

	expectedKeys.forEach(function(key) {
		var actualVal = actual[key];
		var expectedVal = expected[key];
		exports.deepStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});

	actualKeys.forEach(function(key) {
		Assert.ok((expected.hasOwnProperty(key)), `Expected '${label}' not to have property '${key}' but it does.`);
	});
};

exports._deepStrictEqualArguments = function(label, actual, expected) {
	Prove('S**', arguments);
	actual = [].slice.call(actual, 0);
	expected = [].slice.call(expected, 0);
	exports._deepStrictEqualArray(label, actual, expected);
};

exports.deepNarrowStrictEqual = function(label, actual, expected) {

	Prove('s**', arguments);

	var expectedKind = KindOf(expected);

	exports._isKind(label, actual, expectedKind);

	switch (expectedKind) {

		case 'date': return exports._deepStrictEqualDate(label, actual, expected);
		case 'error': return exports._deepStrictEqualError(label, actual, expected);
		case 'buffer': return exports._deepStrictEqualBuffer(label, actual, expected);
		case 'array': return exports._deepNarrowStrictEqualArray(label, actual, expected);
		case 'object': return exports._deepNarrowStrictEqualObject(label, actual, expected);
		case 'arguments': return exports._deepNarrowStrictEqualArguments(label, actual, expected);
		case 'regexp': return exports._deepStrictEqualRegexp(label, actual, expected);
		case 'map': return exports._deepNarrowStrictEqualMap(label, actual, expected);
		case 'set': return exports._deepNarrowStrictEqualSet(label, actual, expected);
		default: return exports.strictEqual(label, actual, expected);
	}
};

exports._deepNarrowStrictEqualArray = function(label, actual, expected) {

	Prove('SAA', arguments);

	expected.forEach(function(expectedVal, i) {
		var actualVal = actual[i];
		exports.deepNarrowStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	});
};

exports._deepNarrowStrictEqualMap = function(label, actual, expected) {

	Prove('S**', arguments);

	expected.forEach(function(expectedVal, key) {
		var actualVal = actual.get(key);
		exports.deepNarrowStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});
};

exports._deepNarrowStrictEqualSet = function(label, actual, expected) {

	Prove('S**', arguments);

	var actualIter = actual.values();
	var expectedIter = expected.values();
	var i;

	for (i = 0; i < expected.size; i++) {
		var actualVal = actualIter.next().value;
		var expectedVal = expectedIter.next().value;
		exports.deepNarrowStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	}
};

exports._deepNarrowStrictEqualObject = function(label, actual, expected) {

	Prove('S**', arguments);

	// var actualKeys = Object.keys(actual);
	var expectedKeys = Object.keys(expected);

	expectedKeys.forEach(function(key) {
		var actualVal = actual[key];
		var expectedVal = expected[key];
		exports.deepNarrowStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});
};

exports._deepNarrowStrictEqualArguments = function(label, actual, expected) {
	Prove('S**', arguments);
	actual = [].slice.call(actual, 0);
	expected = [].slice.call(expected, 0);
	exports._deepNarrowStrictEqualArray(label, actual, expected);
};

exports.deepKind = function(label, actual, expected) {

	Prove('s**', arguments);

	var expectedIsKind = (typeof expected === 'string');

	if (expectedIsKind) return exports._isKind(label, actual, expected);

	var expectedKind = KindOf(expected);

	exports._isKind(label, actual, expectedKind);

	switch (expectedKind) {
		case 'array': return exports._deepKindArray(label, actual, expected);
		case 'object': return exports._deepKindObject(label, actual, expected);
		case 'arguments': return exports._deepKindArguments(label, actual, expected);
		case 'map': return exports._deepKindMap(label, actual, expected);
		default: Assert.fail(`Invalid kind '${expectedKind}' for '${label}'.`);
	}
};

exports._deepKindArray = function(label, actual, expected) {

	Prove('SAA', arguments);

	Assert.ok((actual.length === expected.length), `Expected '${label}.length' to be '${expected.length}' but got '${actual.length}'.`);

	expected.forEach(function(expectedVal, i) {
		var actualVal = actual[i];
		exports.deepKind(`${label}[${i}]`, actualVal, expectedVal);
	});
};

exports._deepKindMap = function(label, actual, expected) {

	Prove('S**', arguments);

	Assert.ok((actual.size === expected.size), `Expected '${label}.size' to be '${expected.size}' but got '${actual.size}'.`);

	expected.forEach(function(expectedVal, key) {
		var actualVal = actual.get(key);
		exports.deepKind(`${label}[${key}]`, actualVal, expectedVal);
	});

	actual.forEach(function(actualVal, key) {
		Assert.ok((expected.has(key)), `Expected '${label}' not to have key '${key}' but it does.`);
	});
};

exports._deepKindObject = function(label, actual, expected) {

	Prove('S**', arguments);

	var actualKeys = Object.keys(actual);
	var expectedKeys = Object.keys(expected);

	expectedKeys.forEach(function(key) {
		var actualVal = actual[key];
		var expectedVal = expected[key];
		exports.deepKind(`${label}[${key}]`, actualVal, expectedVal);
	});

	actualKeys.forEach(function(key) {
		Assert.ok((expected.hasOwnProperty(key)), `Expected '${label}' not to have property '${key}' but it does.`);
	});
};

exports._deepKindArguments = function(label, actual, expected) {
	Prove('S**', arguments);
	actual = [].slice.call(actual, 0);
	expected = [].slice.call(expected, 0);
	exports._deepKindArray(label, actual, expected);
};

exports.isArray = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'array');
};

exports.isBoolean = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'boolean');
};

exports.isBuffer = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'buffer');
};

exports.isDate = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'date');
};

exports.isError = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'error');
};

exports.isFunction = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'function');
};

exports.isMap = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'map');
};

exports.isNumber = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'number');
};

exports.isNull = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'null');
};

exports.isObject = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'object');
};

exports.isPromise = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'promise');
};

exports.isRegexp = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'regexp');
};

exports.isSet = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'set');
};

exports.isString = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'string');
};

exports.isSymbol = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'symbol');
};

exports.isUndefined = function(label, actualVal) {
	Prove('S*', arguments);
	exports._isKind(label, actualVal, 'undefined');
};

exports._isKind = function(label, actualVal, expectedKind) {
	Prove('S**', arguments);
	var actualKind = KindOf(actualVal);
	Assert.ok((actualKind === expectedKind), `Expected kind of '${label}' to be '${expectedKind}' but got '${actualKind}'.`);
};

exports.isEmpty = function(label, val) {
	Prove('S*', arguments);
	Assert.ok(_.isEmpty(val), `Expected '${label}' to be empty but it is not.`);
};

exports.isNotEmpty = function(label, val) {
	Prove('S*', arguments);
	Assert.ok(!_.isEmpty(val), `Expected '${label}' not to be empty but it is.`);
};

exports.isLessThan = function(label, actual, bar) {
	Prove('S**', arguments);
	Assert.ok((actual < bar), `Expected '${label}' to be less than (<) '${bar}' but got '${actual}'.`);
};

exports.isAtMost = function(label, actual, bar) {
	Prove('S**', arguments);
	Assert.ok((actual <= bar), `Expected '${label}' to be at most (<=) '${bar}' but got '${actual}'.`);
};

exports.isAtLeast = function(label, actual, bar) {
	Prove('S**', arguments);
	Assert.ok((actual >= bar), `Expected '${label}' to be at least (>=) '${bar}' but got '${actual}'.`);
};

exports.isGreaterThan = function(label, actual, expected) {
	Prove('S**', arguments);
	Assert.ok((actual > expected), `Expected '${label}' to be greater than (>) '${expected}' but got '${actual}'.`);
};

exports.throws = function(/*fn, err, message*/) {
	// Prove('F*s', arguments);
	Assert.throws.apply(Assert, arguments);
};
