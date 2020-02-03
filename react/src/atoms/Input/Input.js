import React from 'react';
import PropTypes from 'prop-types';

const Input = function (props) {
  return (
    <input
      type={ props.type }
      required={ props.required }
      aria-required={ props.required && props.required }
      placeholder={ props.placeholder }
      disabled={ props.disabled }
      aria-disabled={ props.disabled && props.disabled }
      id={ props.id }
    />
  );
};

Input.propTypes = {
  /**
   * Disables the input.
   **/
  disabled: PropTypes.bool,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the input as required.
   **/
  required: PropTypes.bool,
  /**
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML input type.
   **/
  type: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  required: false,
  type: 'text',
};

export default Input;
