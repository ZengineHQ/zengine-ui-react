import React from 'react';
import PropTypes from 'prop-types';

/**
 * Inputs are a fundamental building block in receiving any kind of information from users.
 *
 * This will generate an HTML `<input>` element.
 *
 * Unless you are building custom Input molecules or something along those lines you will probably never use this directly.
 */
function Input(props) {
  return (
    <input
      type={ props.type }
      id={ props.id }
      name={ props.name }
      required={ props.required }
      aria-required={ props.required === true ? true : null }
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
      placeholder={ props.placeholder }
      className={ props.classes }
      aria-describedby={ props.describedby }
      // Coming from `useField()`.
      value={ props.onChange ? props.value || '' : undefined }
      onChange={ props.onChange && props.onChange }
      onBlur={ props.onBlur && props.onBlur }
    />
  );
}

Input.propTypes = {
  /**
   * HTML input type.
   **/
  type: PropTypes.string.isRequired,
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
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
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * HTML classes to be added as-is to the input.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the input's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the user leaves this input.
   **/
  onBlur: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  name: '',
  disabled: false,
  required: false,
  placeholder: '',
  classes: '',
};

export default Input;
