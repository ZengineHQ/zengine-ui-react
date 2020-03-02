import _isObject from 'lodash/isObject';

/**
 * Return `option` elements for the select.
 * This handles accepting options as an array of either strings or objects with a "key" and "value" properties.

 * @param {array} options
 *
 * @returns {array}
 */
const extractOptions = options => {
  return options.map(opt => {
    if (_isObject(opt)) {
      return opt;
    }
    return { key: `${ opt }`, value: `${ opt }` };
  });
};

export default extractOptions;
