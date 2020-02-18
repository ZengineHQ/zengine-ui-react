import React from 'react';
import PropTypes from 'prop-types';

/**
 * A checkbox is used to collect binary information from users.
 *
 * This will generate an HTML `<input type="text">` element. Checkboxes are sufficiently different from other inputs
 * that they warrant their own atom.
 *
 * See the `CheckboxField` and `CheckboxesField` molecules for example usages.
 *
 * Unless you are building custom Checkbox molecules or something along those lines you will probably never use this directly.
 */
function Checkbox(props) {
  return (
    <input
      type="checkbox"
      id={ props.id }
      name={ props.name }
      required={ props.required }
      aria-required={ props.required === true ? true : null }
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
      readOnly={ props.readonly }
      aria-readonly={ props.readonly === true ? true : null }
      className={ props.classes }
      aria-describedby={ props.describedby }
      checked={ !!props.value }
      aria-checked={ !!props.value }
      // Coming from `useField()` if implemented.
      value={ props.value || true }
      onChange={ props.onChange && props.onChange }
      onBlur={ props.onBlur && props.onBlur }
    />
  );
}

Checkbox.propTypes = {
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
   * Marks the input as read-only.
   **/
  readonly: PropTypes.bool,
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

Checkbox.defaultProps = {
  name: '',
  disabled: false,
  required: false,
  readonly: false,
  classes: '',
};

export default Checkbox;
