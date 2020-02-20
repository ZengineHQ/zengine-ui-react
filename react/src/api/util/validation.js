import _isObject from 'lodash/isObject';
import _isEmpty from 'lodash/isEmpty';

/**
 * Validates whether a value exists.
 *
 * @param {*} value
 * @returns {boolean}
 */
export const exists = value => value !== null && value !== undefined;

/**
 * Validates whether a value is empty.
 *
 * @param {*} value
 * @returns {boolean}
 */
export const isEmpty = value => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (_isObject(value)) {
    return _isEmpty(value);
  }
  return value === '' || !exists(value);
};
