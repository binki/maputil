'use strict';

const assert = require('assert');
const maputil = require('.');
const util = require('util');

const exampleKeys = [
  1,
  '1',
  undefined,
  null,
  NaN,
];

describe('getOrSet', function () {
  for (const key of exampleKeys) {
    describe(`(key=${util.inspect(key)})`, function () {
      it(`gets an existing value`, function () {
        const m = new Map();
        const value = {};
        m.set(key, value);
        let called = 0;

        // The existing value should be returned instead of a newly
        // created one.
        assert.strictEqual(maputil.getOrSet(m, key, function () {
          called++;
          return {};
        }), value);

        // The createValue() should not be called if the value already
        // exists.
        assert.strictEqual(called, 0);
      });

      it(`sets a new value if missing`, function () {
        const m = new Map();
        const newValue = {};
        let called = 0;

        // The new value should be returned.
        assert.strictEqual(maputil.getOrSet(m, key, function () {
          called++;
          return newValue;
        }), newValue);

        // The createValue() should be called exactly once.
        assert.strictEqual(called, 1);
      });
    });
  }
});
