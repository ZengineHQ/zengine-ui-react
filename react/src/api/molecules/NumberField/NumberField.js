import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Input from '../../atoms/Input/Input';
import Label from '../../atoms/Label/Label';
import withForwardRef from '../../util/withForwardRef';
import getFieldClasses from '../../util/getFieldClasses';
import { isEmpty } from '../../util/validation';
import ErrorMessage from '../../util/ErrorMessage/ErrorMessage';

/**
 * The NumberField molecule is a full-fledged number input Formik field with validation, help text and error messages.
 *
 * It consists of an `Input` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect numeric data from users.
 */
function NumberField(props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id || `number-${ props.name }`;
  const helpId = props.help ? `${ id }-help` : null;

  const onChangeHelper = e => {
    // Call custom callback.
    props.onChange && props.onChange(e);
    // Now delegate back to Formik to keep things working.
    return field.onChange(e);
  };
  const onBlurHelper = e => {
    props.onBlur && props.onBlur(e);
    return field.onBlur(e);
  };

  return (
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Input
        type="number"
        id={ id }
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        classes={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        describedby={ helpId }
        { ...field }
        // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
        onChange={ onChangeHelper }
        onBlur={ onBlurHelper }
      />

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

NumberField.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string.isRequired,
  /**
   * HTML element id.
   **/
  id: PropTypes.string,
  /**
   * Field label.
   **/
  label: PropTypes.string,
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
   * HTML placeholder.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the input.
   **/
  classes: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  labelClasses: PropTypes.string,
  /**
   * Optional help text to display below the input.
   **/
  help: PropTypes.string,
  /**
   * Optionally pass a ref to be attached to the actual HTML input element.
   **/
  innerRef: PropTypes.object,
  /**
   * Callback for when the select's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the select loses focus.
   **/
  onBlur: PropTypes.func,
};

NumberField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  readonly: false,
  classes: '',
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { NumberField };

export default withForwardRef(NumberField);

