import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Radio is used to collect binary information from users, they seldom appear alone and usually appear as part of
 * a "Radio Group" where users have to pick one item out of a list, much like a regular select element (with
 * `multiple` set to false).
 *
 * This will generate an HTML `<input type="radio">` element. Radios are sufficiently different from other inputs
 * that they warrant their own atom.
 *
 * See the `RadioGroupField` molecule for an example usage.
 *
 * Unless you are building custom Radio molecules or something along those lines you will probably never use this
 * directly.
 */
function Radio(props) {
  const checked = !!props.value;
  return (
    <input
      type="radio"
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
      // These are specific to checkbox/radio.
      checked={ props.onChange && checked }
      aria-checked={ props.onChange && checked }
      // Coming from `useField()` if implemented.
      value={ props.onChange && props.onBlur ? props.value || '' : undefined }
      onChange={ props.onChange && props.onChange }
      onBlur={ props.onBlur && props.onBlur }
    />
  );
}

Radio.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the radio as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the radio as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the radio as read-only.
   **/
  readonly: PropTypes.bool,
  /**
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * HTML classes to be added as-is to the radio.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the radio's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the radio loses focus.
   **/
  onBlur: PropTypes.func,
};

Radio.defaultProps = {
  name: '',
  disabled: false,
  required: false,
  readonly: false,
  classes: '',
};

export default Radio;
