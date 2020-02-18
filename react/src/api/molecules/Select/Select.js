import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

import Label from "../../atoms/Label/Label";
import withForwardRef from '../../util/withForwardRef';
import getFieldClasses from '../../util/getFieldClasses';
import { isEmpty } from '../../util/validation';

/**
 * A Select molecule consists of an HTML select element paired with a `Label` atom.
 *
 * Use it to have users pick one or more items from a pre-defined list.
 *
 * Why is there no `select` atom you may ask?  Good question!  If there's a need for one we can revisit...
 */
function Select (props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({name: props.name, validate});

  /**
   * Return `option` elements for the select.
   * This handles accepting options as an object keyed by values or as an array of strings.
   */
  const getOptions = () => {
    return Array.isArray(props.options) ? props.options.map(opt => (
      <option key={ opt } value={ opt }>{ opt }</option>
    )) : Object.keys(props.options).map(key => (
      <option key={ key } value={ key }>{ props.options[key] }</option>
    ));
  };

  return (
    <div className="form-input">
      { props.label && (
        <Label required={ props.required } for={ props.name } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <select
        disabled={ props.disabled }
        aria-disabled={ props.disabled === true ? true : null }
        required={ props.required }
        aria-required={ props.required === true ? true : null }
        multiple={ props.multiple }
        className={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        id={ props.name }
        // value, onChange and onBlur are being added here directly from `useField()`.
        { ...field }
      >
        <option value="">{ props.placeholder }</option>
        { getOptions() }
      </select>

      <ErrorMessage name={ field.name } />
    </div>
  );
}


Select.propTypes = {
  /**
   * HTML element name (also used as id).
   **/
  name: PropTypes.string.isRequired,
  /**
   * Select label.
   **/
  label: PropTypes.string,
  /**
   * Select options; either an object keyed by values or an array of strings.
   **/
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.string)]),
  /**
   * Marks the select as required.
   **/
  required: PropTypes.bool,
  /**
   * Marks the select as disabled.
   **/
  disabled: PropTypes.bool,
  /**
   * Marks the select as accepting multiple choices.
   **/
  multiple: PropTypes.bool,
  /**
   * Value to be used as the empty option.
   **/
  placeholder: PropTypes.string,
  /**
   * HTML classes to be added as-is to the select.
   **/
  classes: PropTypes.string,
  /**
   * HTML classes to be added as-is to the label.
   **/
  labelClasses: PropTypes.string,
  /**
   * Optionally pass a ref to be attached to the actual HTML select element.
   **/
  innerRef: PropTypes.object,
};

Select.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-Select-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { Select };

export default withForwardRef(Select);
