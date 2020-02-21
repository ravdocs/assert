'use strict';

var Prove = require('provejs-params');
var Assert = require('assert');
var KindOf = require('kind-of');
var IsEmpty = require('lodash.isempty');

exports.strictEqual = function(label, actual, expected) {
	Prove('S**', arguments);
	Assert.ok(Object.is(actual, expected), `Expected '${label}' to be '${expected}' but got '${actual}'.`);
};

exports.deepStrictEqual = function(label, actual, expected) {

	Prove('s**', arguments);

	var expectedKind = KindOf(expected);

	isKind(label, actual, expectedKind);

	switch (expectedKind) {

		case 'date': return deepStrictEqualDate(label, actual, expected);
		case 'error': return deepStrictEqualError(label, actual, expected);
		case 'buffer': return deepStrictEqualBuffer(label, actual, expected);
		case 'array': return deepStrictEqualArray(label, actual, expected);
		case 'object': return deepStrictEqualObject(label, actual, expected);
		case 'arguments': return deepStrictEqualArguments(label, actual, expected);
		case 'regexp': return deepStrictEqualRegexp(label, actual, expected);
		case 'map': return deepStrictEqualMap(label, actual, expected);
		case 'set': return deepStrictEqualSet(label, actual, expected);
		default: return exports.strictEqual(label, actual, expected);
	}
};

function deepStrictEqualDate(label, actual, expected) {
	Prove('SOO', arguments);
	actual = actual.toString();
	expected = expected.toString();
	exports.strictEqual(label, actual, expected);
}

function deepStrictEqualError(label, actual, expected) {
	Prove('SEE', arguments);
	actual = actual.toString();
	expected = expected.toString();
	exports.strictEqual(label, actual, expected);
}

function deepStrictEqualBuffer(label, actual, expected) {
	Prove('S**', arguments);
	Assert.ok((actual.equals(expected)), `Expected '${label}' to be '${expected}' but got '${actual}'.`);
}

function deepStrictEqualRegexp(label, actual, expected) {
	Prove('S**', arguments);
	actual = actual.toString();
	expected = expected.toString();
	exports.strictEqual(label, actual, expected);
}

function deepStrictEqualArray(label, actual, expected) {

	Prove('SAA', arguments);

	Assert.ok((actual.length === expected.length), `Expected '${label}.length' to be '${expected.length}' but got '${actual.length}'.`);

	expected.forEach(function(expectedVal, i) {
		var actualVal = actual[i];
		exports.deepStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	});
}

function deepStrictEqualMap(label, actual, expected) {

	Prove('S**', arguments);

	Assert.ok((actual.size === expected.size), `Expected '${label}.size' to be '${expected.size}' but got '${actual.size}'.`);

	expected.forEach(function(expectedVal, key) {
		var actualVal = actual.get(key);
		exports.deepStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});

	actual.forEach(function(actualVal, key) {
		Assert.ok((expected.has(key)), `Expected '${label}' not to have key '${key}' but it does.`);
	});
}

function deepStrictEqualSet(label, actual, expected) {

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
}

function deepStrictEqualObject(label, actual, expected) {

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
}

function deepStrictEqualArguments(label, actual, expected) {
	Prove('S**', arguments);
	actual = [].slice.call(actual, 0);
	expected = [].slice.call(expected, 0);
	deepStrictEqualArray(label, actual, expected);
}

exports.deepNarrowStrictEqual = function(label, actual, expected) {

	Prove('s**', arguments);

	var expectedKind = KindOf(expected);

	isKind(label, actual, expectedKind);

	switch (expectedKind) {

		case 'date': return deepStrictEqualDate(label, actual, expected);
		case 'error': return deepStrictEqualError(label, actual, expected);
		case 'buffer': return deepStrictEqualBuffer(label, actual, expected);
		case 'array': return deepNarrowStrictEqualArray(label, actual, expected);
		case 'object': return deepNarrowStrictEqualObject(label, actual, expected);
		case 'arguments': return deepNarrowStrictEqualArguments(label, actual, expected);
		case 'regexp': return deepStrictEqualRegexp(label, actual, expected);
		case 'map': return deepNarrowStrictEqualMap(label, actual, expected);
		case 'set': return deepNarrowStrictEqualSet(label, actual, expected);
		default: return exports.strictEqual(label, actual, expected);
	}
};

function deepNarrowStrictEqualArray(label, actual, expected) {

	Prove('SAA', arguments);

	expected.forEach(function(expectedVal, i) {
		var actualVal = actual[i];
		exports.deepNarrowStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	});
}

function deepNarrowStrictEqualMap(label, actual, expected) {

	Prove('S**', arguments);

	expected.forEach(function(expectedVal, key) {
		var actualVal = actual.get(key);
		exports.deepNarrowStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});
}

function deepNarrowStrictEqualSet(label, actual, expected) {

	Prove('S**', arguments);

	var actualIter = actual.values();
	var expectedIter = expected.values();
	var i;

	for (i = 0; i < expected.size; i++) {
		var actualVal = actualIter.next().value;
		var expectedVal = expectedIter.next().value;
		exports.deepNarrowStrictEqual(`${label}[${i}]`, actualVal, expectedVal);
	}
}

function deepNarrowStrictEqualObject(label, actual, expected) {

	Prove('S**', arguments);

	// var actualKeys = Object.keys(actual);
	var expectedKeys = Object.keys(expected);

	expectedKeys.forEach(function(key) {
		var actualVal = actual[key];
		var expectedVal = expected[key];
		exports.deepNarrowStrictEqual(`${label}[${key}]`, actualVal, expectedVal);
	});
}

function deepNarrowStrictEqualArguments(label, actual, expected) {
	Prove('S**', arguments);
	actual = [].slice.call(actual, 0);
	expected = [].slice.call(expected, 0);
	deepNarrowStrictEqualArray(label, actual, expected);
}

exports.deepKind = function(label, actual, expected) {

	Prove('s**', arguments);

	var expectedIsKind = (typeof expected === 'string');

	if (expectedIsKind) return isKind(label, actual, expected);

	var expectedKind = KindOf(expected);

	isKind(label, actual, expectedKind);

	switch (expectedKind) {
		case 'array': return deepKindArray(label, actual, expected);
		case 'object': return deepKindObject(label, actual, expected);
		case 'arguments': return deepKindArguments(label, actual, expected);
		case 'map': return deepKindMap(label, actual, expected);
		default: Assert.fail(`Invalid kind '${expectedKind}' for '${label}'.`);
	}
};

function deepKindArray(label, actual, expected) {

	Prove('SAA', arguments);

	Assert.ok((actual.length === expected.length), `Expected '${label}.length' to be '${expected.length}' but got '${actual.length}'.`);

	expected.forEach(function(expectedVal, i) {
		var actualVal = actual[i];
		exports.deepKind(`${label}[${i}]`, actualVal, expectedVal);
	});
}

function deepKindMap(label, actual, expected) {

	Prove('S**', arguments);

	Assert.ok((actual.size === expected.size), `Expected '${label}.size' to be '${expected.size}' but got '${actual.size}'.`);

	expected.forEach(function(expectedVal, key) {
		var actualVal = actual.get(key);
		exports.deepKind(`${label}[${key}]`, actualVal, expectedVal);
	});

	actual.forEach(function(actualVal, key) {
		Assert.ok((expected.has(key)), `Expected '${label}' not to have key '${key}' but it does.`);
	});
}

function deepKindObject(label, actual, expected) {

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
}

function deepKindArguments(label, actual, expected) {
	Prove('S**', arguments);
	actual = [].slice.call(actual, 0);
	expected = [].slice.call(expected, 0);
	deepKindArray(label, actual, expected);
}

exports.isArray = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'array');
};

exports.isBoolean = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'boolean');
};

exports.isBuffer = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'buffer');
};

exports.isDate = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'date');
};

exports.isError = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'error');
};

exports.isFunction = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'function');
};

exports.isMap = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'map');
};

exports.isNumber = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'number');
};

exports.isNull = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'null');
};

exports.isObject = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'object');
};

exports.isPromise = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'promise');
};

exports.isRegexp = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'regexp');
};

exports.isSet = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'set');
};

exports.isString = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'string');
};

exports.isSymbol = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'symbol');
};

exports.isUint8Array = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'uint8array');
};

exports.isUndefined = function(label, actualVal) {
	Prove('S*', arguments);
	isKind(label, actualVal, 'undefined');
};

function isKind(label, actualVal, expectedKind) {
	Prove('S**', arguments);
	var actualKind = KindOf(actualVal);
	Assert.ok((actualKind === expectedKind), `Expected kind of '${label}' to be '${expectedKind}' but got '${actualKind}'.`);
}

exports.isEmpty = function(label, val) {
	Prove('S*', arguments);
	Assert.ok(IsEmpty(val), `Expected '${label}' to be empty but it is not.`);
};

exports.isNotEmpty = function(label, val) {
	Prove('S*', arguments);
	Assert.ok(!IsEmpty(val), `Expected '${label}' not to be empty but it is.`);
};

exports.startsWith = function(label, actual, prefix) {
	Prove('S**', arguments);
	Assert.ok((actual.startsWith && actual.startsWith(prefix)), `Expected '${label}' to start with '${prefix}' but it does not.`);
};

exports.endsWith = function(label, actual, suffix) {
	Prove('S**', arguments);
	Assert.ok((actual.endsWith && actual.endsWith(suffix)), `Expected '${label}' to end with '${suffix}' but it does not.`);
};

exports.includes = function(label, actual, needle) {
	Prove('S**', arguments);
	Assert.ok((actual.includes && actual.includes(needle)), `Expected '${label}' to include '${needle}' but it does not.`);
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

exports.isBetween = function(label, actual, min, max) {
	Prove('S***', arguments);
	Assert.ok((actual >= min && actual <= max), `Expected '${label}' to be between '${min}' and '${max}' but got '${actual}'.`);
};

exports.fail = function(/*message*/) {
	// Prove('s', arguments);
	Assert.fail.apply(Assert, arguments);
};

exports.ok = function(label, actual) {
	Prove('S**', arguments);
	Assert.ok(actual, `Expected '${label}' to be truthy but it is not.`);
};

exports.throws = function(/*fn, err, message*/) {
	// Prove('F*s', arguments);
	Assert.throws.apply(Assert, arguments);
};
