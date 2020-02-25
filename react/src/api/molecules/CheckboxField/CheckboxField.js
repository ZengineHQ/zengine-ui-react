import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from 'classnames';

import Label from '../../atoms/Label/Label';
import getFieldClasses from '../../util/getFieldClasses';
import ErrorMessage from '../../util/ErrorMessage/ErrorMessage';
import withForwardRef from '../../util/withForwardRef';
import Checkbox from '../../atoms/Checkbox/Checkbox';

/**
 * The CheckboxField molecule is a full-fledged checkbox input Formik field with validation, help text and error messages.
 *
 * It consists of a `Checkbox` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect binary information from users.
 */
function CheckboxField(props) {
  const validate = value => {
    if (props.required && value === false) {
      return 'Required';
    }
  };

  const [field, meta, { setTouched }] = useField({ name: props.name, validate });

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

  /**
   * This is a workaround for the fact that checkboxes don't seem to get marked as "touched" when the label or
   * checkbox itself is clicked, despite being touched.
   */
  useEffect(() => {
    if (meta.value && meta.value !== meta.initialValue) {
      if (!meta.touched) {
        setTouched(true);
      }
    }
  }, [meta, setTouched]);

  const id = props.id || `checkbox-${ props.name }`;
  const helpId = props.help ? `${ id }-help` : null;

  return (
    <div className="form-check">
      <Checkbox
        id={ id }
        disabled={ props.disabled }
        required={ props.required }
        classes={ getFieldClasses(meta, props.classes).replace('form-control', 'form-check-input') }
        ref={ props.innerRef }
        describedby={ helpId }
        { ...field }
        // If we have custom onChange and onBlur callbacks we need to wrap them to keep from breaking Formik.
        onChange={ onChangeHelper }
        onBlur={ onBlurHelper }
      />

      { props.label && (
        <Label required={ props.required } for={ id }
               classes={ classNames(['form-check-label', props.labelClasses]) }>{ props.label }</Label>
      ) }

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

CheckboxField.propTypes = {
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
   * Callback for when the input's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the input loses focus.
   **/
  onBlur: PropTypes.func,
};

CheckboxField.defaultProps = {
  label: '',
  classes: '',
  disabled: false,
  required: false,
  readonly: false,
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { CheckboxField };

export default withForwardRef(CheckboxField);
