import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

import Input from '../../atoms/Input/Input';
import Label from "../../atoms/Label/Label";
import withForwardRef from '../../util/withForwardRef';
import getFieldClasses from '../../util/getFieldClasses';
import { isEmpty } from '../../util/validation';

/**
 * The TextInput molecule is a full-fledged text input Formik field with validation and error messages.
 *
 * It consists of an `Input` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect short textual data from users.
 */
function TextInput(props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({name: props.name, validate});

  return (
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } for={ props.name } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Input
        type="text"
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        classes={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        { ...field }
      />

      <ErrorMessage name={ field.name } />
    </div>
  );
}

TextInput.propTypes = {
  /**
   * HTML element name (also used as id).
   **/
  name: PropTypes.string.isRequired,
  /**
   * Input label.
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
   * Optionally pass a ref to be attached to the actual HTML input element.
   **/
  innerRef: PropTypes.object,
};

TextInput.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  classes: '',
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { TextInput };

export default withForwardRef(TextInput);
