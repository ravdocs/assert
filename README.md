# Assert

Node.js wrapper aroudn the [assert core module](https://nodejs.org/api/assert.html).

- [Assert](#assert)
- [Goals](#goals)
- [Install](#install)
- [Methods](#methods)
	- [Equality](#equality)
		- [Assert.deepStrictEqual()](#assertdeepstrictequal)
		- [Assert.strictEqual()](#assertstrictequal)
	- [Math](#math)
		- [Assert.isLessThan()](#assertislessthan)
		- [Assert.isAtMost()](#assertisatmost)
		- [Assert.isAtLeast()](#assertisatleast)
		- [Assert.isGreaterThan()](#assertisgreaterthan)
	- [Emptiness](#emptiness)
		- [Assert.isEmpty()](#assertisempty)
		- [Assert.isNotEmpty()](#assertisnotempty)
	- [Kind](#kind)
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
		- [Assert.isUndefined()](#assertisundefined)

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
