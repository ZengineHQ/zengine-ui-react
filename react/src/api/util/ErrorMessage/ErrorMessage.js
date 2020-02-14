import React from 'react';
import PropTypes from 'prop-types';

/**
 * Utility to display an error message for a Formik field.
 * The message will only be displayed if the field has been touched and has an error.
 */
function ErrorMessage(props) {
  // We add display block inline here because the default Bootstrap styles require a container to have certain classes
  // for this to appear, however we are controlling the visibility ourselves so this makes it fit our needs.
  return props.meta.touched ? <div className="invalid-feedback" style={ { display: 'block' } }>
    { props.meta.error }
  </div> : null;
}

ErrorMessage.propTypes = {
  /**
   * Formik field metadata object.
   **/
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired
};

export default ErrorMessage;