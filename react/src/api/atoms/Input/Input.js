import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <input
      type={ props.type }
      id={ props.id }
      required={ props.required }
      aria-required={ props.required === true ? true : null }
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
      placeholder={ props.placeholder }
      className={ props.classes }
    />
  );
}

Input.propTypes = {
  /**
   * HTML input type.
   **/
  type: PropTypes.string.isRequired,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the input as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the input as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the input.
   **/
  classes: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  required: false,
  type: 'text',
};

export default Input;
