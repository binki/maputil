Some utilities for `Map`. So far, there are very few. Please open
issues with rationale to propose new additions.

## `getOrSet(map, key, createValue)`

If `key` exists in `map`, return the value. Otherwise, set it to the
value returned by `createValue()` and return the newly added value.

The ES6 `Map` [does not provide a DRY way to get or set a
value](https://stackoverflow.com/a/44733792/429091). This function
does that.
