import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';

import Input from '../../../atoms/Input/Input';
import Label from "../../../atoms/Label/Label";
import withForwardRef from '../../../util/withForwardRef';
import { getFieldClasses } from '../../../util/getFieldClasses';
import { isEmpty } from '../../../util/validation';

/**
 * A NumberInput molecule consists of an `Input` atom paired with a `Label` atom.
 *
 * Use it to collect numeric data from users.
 */
function NumberInput (props) {
  const name = props.name || 'number';

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
        type="number"
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

NumberInput.propTypes = {
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

NumberInput.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  classes: '',
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { NumberInput };

export default withForwardRef(NumberInput);

