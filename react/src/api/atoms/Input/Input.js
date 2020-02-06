import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  return (
    <input
      type={ props.type }
      id={ props.name }
      name={ props.name }
      required={ props.required }
      value={ props.value || '' }
      aria-required={ props.required === true ? true : null }
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
      placeholder={ props.placeholder }
      className={ props.classes }
      onChange={ props.onChange }
      onBlur={ props.onBlur }
    />
  );
}

Input.propTypes = {
  /**
   * HTML input type.
   **/
  type: PropTypes.string.isRequired,
  /**
   * HTML element name (also used as id).
   **/
  name: PropTypes.string,
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
  type: 'text',
  name: '',
  disabled: false,
  required: false,
  placeholder: '',
  classes: '',
  onChange: () => null
};

export default Input;
