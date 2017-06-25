'use strict';

/**
 * If key exists in map, return the value. Otherwise, set it to the
 * value returned by createValue() and return the newly added value.
 *
 * @param map {Map}
 * @param key The key to check for in map.
 * @param createValue {Function} Build a value to insert into map when
 *   key is not found.
 */
module.exports.getOrSet = function getOrSet (map, key, createValue) {
  // There are only so many ways to implement this function, but I
  // first read this at https://stackoverflow.com/a/44733792/429091.
  if (map.has(key)) {
    return map.get(key);
  }
  const value = createValue();
  map.set(key, value);
  return value;
};
