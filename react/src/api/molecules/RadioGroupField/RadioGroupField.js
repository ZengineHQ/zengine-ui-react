import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Label from '../../atoms/Label/Label';
import getFieldClasses from '../../util/getFieldClasses';
import ErrorMessage from '../../util/ErrorMessage/ErrorMessage';
import Radio from '../../atoms/Radio/Radio';
import extractOptions from '../../util/extractOptions';

/**
 * The RadioGroupField molecule is a full-fledged radio input Formik field with validation, help text and error messages.
 *
 * It consists of one or more `Radio` atoms, each paired with a `Label` atom and some additional markup.
 *
 * Use it to have users select an item from a list.
 */
function RadioGroupField(props) {
  const validate = value => {
    if (props.required && value === undefined) {
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

  const fieldId = props.id || `radiogroup-${ props.name }`;
  const helpId = props.help ? `${ fieldId }-help` : null;

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

  return (
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } classes={ props.labelClasses }>{ props.label }</Label>
      ) }

      { extractOptions(props.options).map((opt, i) => {
        const id = `${ fieldId }-${ opt.value }`;
        return (
          <div className="form-check" key={ i }>
            <Radio
              id={ id }
              disabled={ props.disabled }
              required={ props.required }
              classes={ getFieldClasses(meta, props.classes).replace('form-control', 'form-check-input') }
              describedby={ helpId }
              { ...field }
              value={ opt.key }
            />

            <Label required={ false } for={ id } classes="form-check-label">{ opt.value }</Label>
          </div>
        )
      }) }

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

RadioGroupField.propTypes = {
  /**
   * HTML element name.
   **/
  name: PropTypes.string.isRequired,
  /**
   * HTML element id, used to build the ids for each individual radio input.
   **/
  id: PropTypes.string,
  /**
   * Radio Group field label.
   **/
  label: PropTypes.string,
  /**
   * Marks the radios as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the radios as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the radios as read-only.
   **/
  readonly: PropTypes.bool,
  /**
   * HTML classes to be added as-is to the radios.
   **/
  classes: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  labelClasses: PropTypes.string,
  /**
   * Optional help text to display below the radios.
   **/
  help: PropTypes.string,
  /**
   * Callback for when the radio group's value changes.
   **/
  onChange: PropTypes.func,
  /**
   * Callback for when the radio group loses focus.
   **/
  onBlur: PropTypes.func,
  /**
   * Radio group options; either an object keyed by values or an array of strings.
   **/
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.string)]).isRequired,
};

RadioGroupField.defaultProps = {
  disabled: false,
  required: false,
  readonly: false,
};

export default RadioGroupField;
