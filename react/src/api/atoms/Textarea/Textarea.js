import React from 'react';
import PropTypes from 'prop-types';

/**
 * Textareas are useful for collecting long-form written information from users.
 *
 * This will generate an HTML `<textarea>` element.
 *
 * See the `TextAreaField` for an example usage.
 *
 * Unless you are building custom Input molecules or something along those lines you will probably never use this directly.
 */
function Textarea(props) {
  return (
    <textarea
      id={ props.id }
      name={ props.name }
      required={ props.required }
      aria-required={ props.required === true ? true : null }
      disabled={ props.disabled }
      aria-disabled={ props.disabled === true ? true : null }
      readOnly={ props.readonly }
      aria-readonly={ props.readonly === true ? true : null }
      placeholder={ props.placeholder }
      className={ props.classes }
      aria-describedby={ props.describedby }
      // Coming from `useField()` if implemented.
      // See `Input.js` for explanation.
      value={ props.onChange && props.onBlur ? props.value || '' : undefined }
      onChange={ props.onChange && props.onChange }
      onBlur={ props.onBlur && props.onBlur }
      // This inline style hacky thing allows us to control whether the textarea should be resizable via props.
      style={ props.resizable ? {} : { resize: 'none' } }
    />
  );
}

Textarea.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Marks the textarea as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the textarea as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the textarea as read-only.
   **/
  readonly: PropTypes.bool,
  /**
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * The element id of any associated help text, used for accessibility.
   **/
  describedby: PropTypes.string,
  /**
   * HTML classes to be added as-is to the textarea.
   **/
  classes: PropTypes.string,
  /**
   * Callback for when the textarea's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the textarea loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * Whether the textarea should be resizable; uses native HTML functionality.
   **/
  resizable: PropTypes.bool,
};

Textarea.defaultProps = {
  name: '',
  disabled: false,
  required: false,
  readonly: false,
  placeholder: '',
  classes: '',
  resizable: true,
};

export default Textarea;
