# Assert

Node.js wrapper aroudn the [assert core module](https://nodejs.org/api/assert.html).

- [Assert](#assert)
- [Goals](#goals)
- [Install](#install)
- [Methods](#methods)
	- [Equality](#equality)
		- [Assert.deepStrictEqual()](#assertdeepstrictequal)
		- [Assert.deepNarrowStrictEqual()](#assertdeepnarrowstrictequal)
		- [Assert.strictEqual()](#assertstrictequal)
	- [Similarity](#similarity)
		- [Assert.startsWith()](#assertstartswith)
		- [Assert.endsWith()](#assertendswith)
		- [Assert.includes()](#assertincludes)
	- [Math](#math)
		- [Assert.isLessThan()](#assertislessthan)
		- [Assert.isAtMost()](#assertisatmost)
		- [Assert.isAtLeast()](#assertisatleast)
		- [Assert.isGreaterThan()](#assertisgreaterthan)
		- [Assert.isBetween()](#assertisbetween)
	- [Emptiness](#emptiness)
		- [Assert.isEmpty()](#assertisempty)
		- [Assert.isNotEmpty()](#assertisnotempty)
	- [Kind](#kind)
		- [Assert.deepKind()](#assertdeepkind)
		- [Assert.deepNarrowKind()](#assertdeepnarrowkind)
		- [Assert.isArray()](#assertisarray)
		- [Assert.isBoolean()](#assertisboolean)
		- [Assert.isBuffer()](#assertisbuffer)
		- [Assert.isDate()](#assertisdate)
		- [Assert.isError()](#assertiserror)
		- [Assert.isFunction()](#assertisfunction)
		- [Assert.isMap()](#assertismap)
		- [Assert.isNull()](#assertisnull)
		- [Assert.isNumber()](#assertisnumber)
		- [Assert.isObject()](#assertisobject)
		- [Assert.isPromise()](#assertispromise)
		- [Assert.isRegexp()](#assertisregexp)
		- [Assert.isSet()](#assertisset)
		- [Assert.isString()](#assertisstring)
		- [Assert.isSymbol()](#assertissymbol)
		- [Assert.isUint8Array()](#assertisuint8array)
		- [Assert.isUndefined()](#assertisundefined)
	- [Misc](#misc)
		- [Assert.fail()](#assertfail)
		- [Assert.ok()](#assertok)
		- [Assert.throws()](#assertthrows)

# Goals

- Extend functionality of the [assert core module](https://nodejs.org/api/assert.html)
- Provide more helpful error messages

# Install

```bash
npm install @ravdocs/assert
```

# Methods

## Equality

### Assert.deepStrictEqual()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **expected** `<any>` (*required*) Expected value of the `actual` parameter.

Test for deep equality between the `actual` and `expected` parameters. It behaves similar to [`assert.deepStrictEqual`](https://nodejs.org/api/assert.html#assert_assert_deepstrictequal_actual_expected_message) but with these differences:

- Set items are compared ordered.
- Circular references are unsupported; they will result in a stack overflow.

```js
var Assert = require('@ravdocs/assert');

var actual1 = {a: 1};
var expected1 = {a: 1};
Assert.deepStrictEqual('actual1', actual1, expected1);
// OK

var actual2 = {a: 1};
var expected2 = {a: '1'};
Assert.deepStrictEqual('actual2', actual2, expected2);
// AssertionError: Expected kind of 'actual2[a]' to be 'string' but got 'number'.
```

### Assert.deepNarrowStrictEqual()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **expected** `<any>` (*required*) Expected value of the `actual` parameter.

Similar to [Assert.deepStrictEqual()](#assertdeepstrictequal) except that it will pass when the `expected` parameter is a subset of the `actual` parameter. Any objects in the `expected` parameter must exist in the `actual` parameter, and the keys of these `expected` objects must exist in the corresponding `actual` objects, but the `actual` objects can have more keys than those in the `expected` ones. This rule applies for objects, arrays, Maps, and Sets. The built-in [`assert`](https://nodejs.org/api/assert.html) module does not have a counterpart to this method.

```js
var Assert = require('@ravdocs/assert');

var actual1 = {a: 1, b: 1};
var expected1 = {a: 1};
Assert.deepNarrowStrictEqual('actual1', actual1, expected1);
// OK

var actual2 = {a: 1};
var expected2 = {a: 1, b: 1};
Assert.deepNarrowStrictEqual('actual2', actual2, expected2);
// AssertionError: Expected kind of 'actual2[b]' to be 'number' but got 'undefined'.

var actual3 = ['a', 'b'];
var expected3 = ['a'];
Assert.deepNarrowStrictEqual('actual3', actual3, expected3);
// OK

var actual4 = ['a'];
var expected4 = ['a', 'b'];
Assert.deepNarrowStrictEqual('actual4', actual4, expected4);
// AssertionError: Expected kind of 'actual4[1]' to be 'string' but got 'undefined'.
```

### Assert.strictEqual()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **expected** `<any>` (*required*) Expected value of the `actual` parameter.

Test strict equality between the `actual` and `expected` parameters. It behaves similar to [`assert.strictEqual`](https://nodejs.org/api/assert.html#assert_assert_strictequal_actual_expected_message).

```js
var Assert = require('@ravdocs/assert');

var actual1 = 1;
var expected1 = 1;
Assert.strictEqual('actual1', actual1, expected1);
// OK

var actual2 = 1;
var expected2 = '1';
Assert.strictEqual('actual2', actual2, expected2);
// AssertionError: Expected kind of 'actual2' to be 'string' but got 'number'.

var actual3 = 1;
var expected3 = 2;
Assert.strictEqual('actual3', actual3, expected3);
// AssertionError: Expected 'actual3' to be '2' but got '1'.
```

## Similarity

### Assert.startsWith()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<string>` (*required*) Actual value to test.
- **prefix** `<string>` (*required*) Expected prefix of the `actual` parameter.

Test whether `actual` starts with `prefix`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 'ab';
var prefix1 = 'a';
Assert.startsWith('actual1', actual1, prefix1);
// OK

var actual2 = 'ab';
var prefix2 = 'b';
Assert.startsWith('actual2', actual2, prefix2);
// AssertionError: Expected 'actual2' to start with 'b' but it does not.
```

### Assert.endsWith()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<string>` (*required*) Actual value to test.
- **suffix** `<string>` (*required*) Expected suffix of the `actual` parameter.

Test whether `actual` ends with `suffix`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 'ab';
var suffix1 = 'b';
Assert.endsWith('actual1', actual1, suffix1);
// OK

var actual2 = 'ab';
var suffix2 = 'a';
Assert.endsWith('actual2', actual2, suffix2);
// AssertionError: Expected 'actual2' to end with 'a' but it does not.
```

### Assert.includes()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<string>` | `<any[]>` (*required*) Actual value to test.
- **needle** `<any>` (*required*) Value expected to be inside the `actual` parameter.

Test whether `actual` includes `needle`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 'abc';
var needle1 = 'b';
Assert.includes('actual1', actual1, needle1);
// OK

var actual2 = 'abc';
var needle2 = 'd';
Assert.includes('actual2', actual2, needle2);
// AssertionError: Expected 'actual2' to include 'd' but it does not.

var actual3 = ['a', 'b', 'c'];
var needle3 = 'b';
Assert.includes('actual3', actual3, needle3);
// OK

var actual4 = ['a', 'b', 'c'];
var needle4 = 'd';
Assert.includes('actual4', actual4, needle4);
// AssertionError: Expected 'actual4' to include 'd' but it does not.
```

## Math

### Assert.isLessThan()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **bar** `<any>` (*required*) The `actual` parameter should be less than (<) this value.

Test whether `actual` is less than (<) `bar`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 4;
var bar1 = 5;
Assert.isLessThan('actual1', actual1, bar1);
// OK

var actual2 = 5;
var bar2 = 5;
Assert.isLessThan('actual2', actual2, bar2);
// AssertionError: Expected 'actual2' to be less than (<) '5' but got '5'.

var actual3 = 6;
var bar3 = 5;
Assert.isLessThan('actual3', actual3, bar3);
// AssertionError: Expected 'actual3' to be less than (<) '5' but got '6'.
```

### Assert.isAtMost()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **bar** `<any>` (*required*) The `actual` parameter should be at most (<=) this value.

Test whether `actual` is at most (<=) `bar`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 4;
var bar1 = 5;
Assert.isAtMost('actual1', actual1, bar1);
// OK

var actual2 = 5;
var bar2 = 5;
Assert.isAtMost('actual2', actual2, bar2);
// OK

var actual3 = 6;
var bar3 = 5;
Assert.isAtMost('actual3', actual3, bar3);
// AssertionError: Expected 'actual3' to be at most (<=) '5' but got '6'.
```

### Assert.isAtLeast()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **bar** `<any>` (*required*) The `actual` parameter should be at least (>=) this value.

Test whether `actual` is at least (>=) `bar`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 4;
var bar1 = 5;
Assert.isAtLeast('actual1', actual1, bar1);
// AssertionError: Expected 'actual1' to be at least (>=) '5' but got '4'.

var actual2 = 5;
var bar2 = 5;
Assert.isAtLeast('actual2', actual2, bar2);
// OK

var actual3 = 6;
var bar3 = 5;
Assert.isAtLeast('actual3', actual3, bar3);
// OK
```

### Assert.isGreaterThan()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **bar** `<any>` (*required*) The `actual` parameter should be greater than (>) this value.

Test whether `actual` is greater than (>) `bar`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 4;
var bar1 = 5;
Assert.isGreaterThan('actual1', actual1, bar1);
// AssertionError: Expected 'actual1' to be greater than (>) '5' but got '4'.

var actual2 = 5;
var bar2 = 5;
Assert.isGreaterThan('actual2', actual2, bar2);
// AssertionError: Expected 'actual2' to be greater than (>) '5' but got '5'.

var actual3 = 6;
var bar3 = 5;
Assert.isGreaterThan('actual3', actual3, bar3);
// OK
```

### Assert.isBetween()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **min** `<any>` (*required*) The `actual` parameter should be greater than or equal to (>=) this value.
- **max** `<any>` (*required*) The `actual` parameter should be less than or equal to (<=) this value.

Test whether `actual` is between `min` and `max`. Like the SQL `BETWEEN` operator, this method is inclusive; the test will pass if `actual` equals `min` or `max`.

```js
var Assert = require('@ravdocs/assert');

var actual1 = 6;
var min1 = 2;
var max1 = 5;
Assert.isBetween('actual1', actual1, min1, max1);
// AssertionError: Expected 'actual1' to be between '2' and '5' but got '6'.

var actual2 = 4;
var min2 = 2;
var max2 = 5;
Assert.isBetween('actual2', actual2, min2, max2);
// OK

var actual3 = 5;
var min3 = 2;
var max3 = 5;
Assert.isBetween('actual3', actual3, min3, max3);
// OK
```

## Emptiness

### Assert.isEmpty()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether `actual` is empty. It uses [`lodash.isEmpty`](https://lodash.com/docs/4.17.11#isEmpty).

```js
var Assert = require('@ravdocs/assert');

var actual1 = '';
Assert.isEmpty('actual1', actual1);
// OK

var actual2 = [];
Assert.isEmpty('actual2', actual2);
// OK

var actual3 = [''];
Assert.isEmpty('actual3', actual3);
// AssertionError: Expected 'actual3' to be empty but it is not.
```

### Assert.isNotEmpty()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether `actual` is not empty. It uses [`lodash.isEmpty`](https://lodash.com/docs/4.17.11#isEmpty).

```js
var Assert = require('@ravdocs/assert');

var actual1 = '';
Assert.isNotEmpty('actual1', actual1);
// AssertionError: Expected 'actual1' not to be empty but it is.
// OK

var actual2 = [];
Assert.isNotEmpty('actual2', actual2);
// AssertionError: Expected 'actual2' not to be empty but it is.

var actual3 = [''];
Assert.isNotEmpty('actual3', actual3);
// OK
```

## Kind

### Assert.deepKind()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **expected** `<any>` (*required*) Expected kind of the `actual` parameter.

Test whether the kind of `actual` is `expected`. Optionally, if `expected` is an array, object, or Map, it tests for deep kind equality between the `actual` and `expected` parameters. It is similar to [Assert.deepStrictEqual()](#assertdeepstrictequal) except that `expected` denotes the kinds of values rather than the values themselves. The built-in [`assert`](https://nodejs.org/api/assert.html) module does not have a counterpart to this method.

```js
var Assert = require('@ravdocs/assert');

var actual1 = {a: 1, b: 'astring'};
var expected1 = {a: 'number', b: 'string'};
Assert.deepKind('actual1', actual1, expected1);
// OK

var actual2 = {a: 1, b: 'astring'};
var expected2 = {a: 'number', b: 'number'};
Assert.deepKind('actual2', actual2, expected2);
// AssertionError: Expected kind of 'actual2[b]' to be 'number' but got 'string'.

var actual3 = [
	{a: 1},
	{b: 'astring'}
];
var expected3 = [
	{a: 'number'},
	{b: 'string'}
];
Assert.deepKind('actual3', actual3, expected3);
// OK

var actual4 = [
	{a: 1},
	{b: 'astring'}
];
var expected4 = [
	{a: 'number'},
	{b: 'number'}
];
Assert.deepKind('actual4', actual4, expected4);
// AssertionError: Expected kind of 'actual4[b]' to be 'number' but got 'string'.
```

### Assert.deepNarrowKind()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.
- **expected** `<any>` (*required*) Expected kind of the `actual` parameter.

Similar to [Assert.deepKind()](#assertdeepkind) except that it will pass when the `expected` parameter is a subset of the `actual` parameter. Any objects in the `expected` parameter must exist in the `actual` parameter, and the keys of these `expected` objects must exist in the corresponding `actual` objects, but the `actual` objects can have more keys than those in the `expected` ones. This rule applies for objects, arrays, and Maps. The built-in [`assert`](https://nodejs.org/api/assert.html) module does not have a counterpart to this method.

```js
var Assert = require('@ravdocs/assert');

var actual1 = {a: 1, b: 'astring'};
var expected1 = {a: 'number', b: 'string'};
Assert.deepNarrowKind('actual1', actual1, expected1);
// OK

var actual2 = {a: 1, b: 'astring'};
var expected2 = {a: 'number', b: 'number'};
Assert.deepNarrowKind('actual2', actual2, expected2);
// AssertionError: Expected kind of 'actual2[b]' to be 'number' but got 'string'.

var actual3 = {a: 1, b: 'astring'};
var expected3 = {a: 'number'};
Assert.deepNarrowKind('actual3', actual3, expected3);
// OK

var actual4 = {a: 1};
var expected4 = {a: 'number', b: 'string'};
Assert.deepNarrowKind('actual4', actual4, expected4);
// AssertionError: Expected kind of 'actual4[b]' to be 'number' but got 'undefined'.

var actual5 = {a: 1, b: 'astring'};
var expected5 = 'object';
Assert.deepNarrowKind('actual5', actual5, expected5);
// OK
```

### Assert.isArray()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'array'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = [];
Assert.isArray('actual1', actual1);
// OK

var actual2 = '';
Assert.isArray('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'array' but got 'string'.
```

### Assert.isBoolean()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'boolean'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = false;
Assert.isBoolean('actual1', actual1);
// OK

var actual2 = '';
Assert.isBoolean('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'boolean' but got 'string'.
```

### Assert.isBuffer()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'buffer'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = Buffer.from('');
Assert.isBuffer('actual1', actual1);
// OK

var actual2 = '';
Assert.isBuffer('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'buffer' but got 'string'.
```

### Assert.isDate()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'date'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = new Date();
Assert.isDate('actual1', actual1);
// OK

var actual2 = '';
Assert.isDate('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'date' but got 'string'.
```

### Assert.isError()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'error'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = new Error('Test');
Assert.isError('actual1', actual1);
// OK

var actual2 = '';
Assert.isError('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'error' but got 'string'.
```

### Assert.isFunction()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'function'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = function() {};
Assert.isFunction('actual1', actual1);
// OK

var actual2 = '';
Assert.isFunction('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'function' but got 'string'.
```

### Assert.isMap()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'map'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = new Map();
Assert.isMap('actual1', actual1);
// OK

var actual2 = '';
Assert.isMap('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'map' but got 'string'.
```

### Assert.isNull()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'null'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = null;
Assert.isNull('actual1', actual1);
// OK

var actual2 = '';
Assert.isNull('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'null' but got 'string'.
```

### Assert.isNumber()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'number'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = 1;
Assert.isNumber('actual1', actual1);
// OK

var actual2 = '';
Assert.isNumber('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'number' but got 'string'.
```

### Assert.isObject()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'object'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = {};
Assert.isObject('actual1', actual1);
// OK

var actual2 = '';
Assert.isObject('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'object' but got 'string'.
```

### Assert.isPromise()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'promise'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = new Promise(function(resolve) {
	resolve();
});
Assert.isPromise('actual1', actual1);
// OK

var actual2 = '';
Assert.isPromise('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'promise' but got 'string'.
```

### Assert.isRegexp()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'regexp'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = /\d+/;
Assert.isRegexp('actual1', actual1);
// OK

var actual2 = '';
Assert.isRegexp('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'regexp' but got 'string'.
```

### Assert.isSet()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'set'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = new Set();
Assert.isSet('actual1', actual1);
// OK

var actual2 = '';
Assert.isSet('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'set' but got 'string'.
```

### Assert.isString()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'string'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = '1';
Assert.isString('actual1', actual1);
// OK

var actual2 = 1;
Assert.isString('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'string' but got 'number'.
```

### Assert.isSymbol()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'symbol'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = Symbol('1');
Assert.isSymbol('actual1', actual1);
// OK

var actual2 = '';
Assert.isSymbol('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'symbol' but got 'string'.
```

### Assert.isUint8Array()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'uint8array'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1 = new Uint8Array();
Assert.isUint8Array('actual1', actual1);
// OK

var actual2 = '';
Assert.isUint8Array('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'uint8array' but got 'string'.
```

### Assert.isUndefined()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **value** `<any>` (*required*) Actual value to test.

Test whether the kind of `actual` is 'undefined'. The kind is calculated with [`kind-of`](https://www.npmjs.com/package/kind-of).

```js
var Assert = require('@ravdocs/assert');

var actual1;
Assert.isUndefined('actual1', actual1);
// OK

var actual2 = '';
Assert.isUndefined('actual2', actual2);
// AssertionError: Expected kind of 'actual2' to be 'undefined' but got 'string'.
```

## Misc

### Assert.fail()

- **message** `<string>`

Alias of [`assert.fail`](https://nodejs.org/api/assert.html#assert_assert_fail_message).

```js
var Assert = require('@ravdocs/assert');

Assert.fail();
// AssertionError [ERR_ASSERTION]: Failed

Assert.fail('An error occurred');
// AssertionError [ERR_ASSERTION]: An error occurred
```

### Assert.ok()

- **label** `<string>` (*required*) Name of the variable used as the `actual` parameter. The error message will refer to the `actual` parameter by this label.
- **actual** `<any>` (*required*) Actual value to test.

Test whether `actual` is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). It behaves similar to [`assert.ok`](https://nodejs.org/api/assert.html#assert_assert_ok_value_message).

```js
var Assert = require('@ravdocs/assert');

var actual1 = 1;
Assert.ok('actual1', actual1);
// OK

var actual2 = 0;
Assert.ok('actual2', actual2);
// AssertionError: Expected 'actual2' to be truthy but it is not.
```

### Assert.throws()

- **fn** `<Function>` (*required*)
- **error** `<RegExp>` | `<Function>` | `<Object>` | `<Error>`
- **message** `<string>`

Alias of [`assert.throws`](https://nodejs.org/api/assert.html#assert_assert_throws_fn_error_message).

```js
var Assert = require('@ravdocs/assert');

function fn1() {
	throw new Error('Correct error');
}
var expected1 = {message: 'Correct error'};
Assert.throws(fn1, expected1);
// OK

function fn2() {
	throw new Error('Wrong error');
}
var expected2 = {message: 'Correct error'};
Assert.throws(fn2, expected2);
// AssertionError: Input A expected to strictly deep-equal input B:...
```
