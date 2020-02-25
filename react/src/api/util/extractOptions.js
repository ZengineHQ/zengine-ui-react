import _isObject from 'lodash/isObject';

/**
 * Return `option` elements for the select.
 * This handles accepting options as an object keyed by values or as an array of strings.

 * @param {array|object} options
 *
 * @returns {array}
 */
const extractOptions = options => {
  if (Array.isArray(options)) {
    return options.map(opt => ({ key: opt, val: opt }));
  }
  if (_isObject(options)) {
    return Object.keys(options).map(key => ({ key, val: options[key] }));
  }
  return [];
};

export default extractOptions;
