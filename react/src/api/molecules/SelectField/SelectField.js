import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Label from "../../atoms/Label/Label";
import withForwardRef from '../../util/withForwardRef';
import getFieldClasses from '../../util/getFieldClasses';
import { isEmpty } from '../../util/validation';
import ErrorMessage from '../../util/ErrorMessage/ErrorMessage';

/**
 * The select is a full-fledged select input Formik field with validation, help text and error messages.
 *
 * A SelectField molecule consists of an HTML select element paired with a `Label` atom and some etra markup.
 *
 * Use it to have users pick one or more items from a pre-defined list.
 *
 * Why is there no `select` atom you may ask?  Good question!  If there's a need for one we can revisit...
 */
function SelectField (props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({name: props.name, validate});

  const id = props.id || `select-${ props.name }`;
  const helpId = props.help ? `${ id }-help` : null;

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
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <select
        id={ id }
        disabled={ props.disabled }
        aria-disabled={ props.disabled === true ? true : null }
        required={ props.required }
        aria-required={ props.required === true ? true : null }
        multiple={ props.multiple }
        className={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        // value, onChange and onBlur are being added here directly from `useField()`.
        { ...field }
      >
        <option value="">{ props.placeholder }</option>
        { getOptions() }
      </select>

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}


SelectField.propTypes = {
  /**
   * HTML element name (also used as id).
   **/
  name: PropTypes.string.isRequired,
  /**
   * SelectField label.
   **/
  label: PropTypes.string,
  /**
   * SelectField options; either an object keyed by values or an array of strings.
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
   * Optional help text to display below the select.
   **/
  help: PropTypes.string,
  /**
   * Optionally pass a ref to be attached to the actual HTML select element.
   **/
  innerRef: PropTypes.object,
};

SelectField.defaultProps = {
  disabled: false,
  label: '',
  required: false,
  classes: '',
  multiple: false,
  placeholder: '-SelectField-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { SelectField };

export default withForwardRef(SelectField);
