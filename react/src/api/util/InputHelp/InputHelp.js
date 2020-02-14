import React from 'react';
import PropTypes from 'prop-types';

/**
 * Utility to display helper description text for a Formik field.
 * The message will only be displayed if the field has a description.
 *
 * This is used primarily by the input Molecules and unless you are writing your own custom input molecules
 * you will probably not have no use for it.
 */
function InputHelp(props) {
  return props.text && <small id={ props.id } className="form-text text-muted">{ props.help }</small>;
}

InputHelp.propTypes = {
  /**
   * The HTML id to set on this element.  Used for accessibility purposes.
   **/
  id: PropTypes.string,
  /**
   * The help text to display
   **/
  text: PropTypes.string.isRequired,
};

export default InputHelp;
