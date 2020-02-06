/**
 * Returns css classes to add to form inputs.
 *
 * @param {object} meta The Formik Field meta object.
 * @param {string} extra Any additional classes to add to the input.
 *
 * @returns {string}
 */
export const getFieldClasses = (meta, extra) => {
  let classes = ['form-control'];

  if (meta.touched) {
    classes.push(meta.error ? 'is-invalid' : 'is-valid');
  }

  if (extra) {
    classes = classes.concat(extra.split(' '));
  }

  return classes.join(' ');
};
