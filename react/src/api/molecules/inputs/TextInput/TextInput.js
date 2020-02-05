import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";
import withForwardRef from '../../../util/withForwardRef';
import { getFieldClasses } from '../../../util/getFieldClasses';
import { isEmpty } from '../../../util/validation';

function TextInput(props) {
  const name = props.name || 'text';

  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({name, validate});

  return (
    <div className="form-input">
      { props.label && (
        <Label required={ props.required } for={ name } classes={ props.labelClasses }>{ props.label }</Label>
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
  name: PropTypes.string,
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

export default withForwardRef(TextInput);
