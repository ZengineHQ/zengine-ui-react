import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import Label from '../../atoms/Label/Label';
import Select from '../../atoms/Select/Select';
import withForwardRef from '../../util/withForwardRef';
import getFieldClasses from '../../util/getFieldClasses';
import { isEmpty } from '../../util/validation';
import ErrorMessage from '../../util/ErrorMessage/ErrorMessage';

/**
 * The SelectField is a full-fledged select input Formik field with validation, help text and error messages.
 *
 * A SelectField molecule consists of a `Select` atom paired with a `Label` atom and some extra markup.
 *
 * Use it to have users pick one or more items from a pre-defined list.
 */
function SelectField(props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id || `select-${ props.name }`;
  const helpId = props.help ? `${ id }-help` : null;

  return (
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Select
        id={ id }
        disabled={ props.disabled }
        required={ props.required }
        multiple={ props.multiple }
        options={ props.options }
        placeholder={ props.placeholder }
        classes={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        describedby={ helpId }
        // value, onChange and onBlur are being added here directly from `useField()`.
        { ...field }
      />

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

SelectField.propTypes = {
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
  placeholder: '-Select-'
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { SelectField };

export default withForwardRef(SelectField);
