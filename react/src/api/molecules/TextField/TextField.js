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
 * The TextField molecule is a full-fledged text input Formik field with validation, help text and error messages.
 *
 * It consists of an `Input` atom, a `Label` atom and some additional markup.
 *
 * Use it to collect short textual data from users.
 */
function TextField(props) {
  const validate = value => {
    if (props.required && isEmpty(value)) {
      return 'Required';
    }
  };

  const [field, meta] = useField({ name: props.name, validate });

  const id = props.id || `text-${ props.name }`;
  const helpId = props.help ? `${ id }-help` : null;

  return (
    <div className="form-group">
      { props.label && (
        <Label required={ props.required } for={ id } classes={ props.labelClasses }>{ props.label }</Label>
      ) }
      <Input
        type="text"
        id={ id }
        disabled={ props.disabled }
        required={ props.required }
        placeholder={ props.placeholder }
        classes={ getFieldClasses(meta, props.classes) }
        ref={ props.innerRef }
        describedby={ helpId }
        { ...field }
      />

      { props.help && <small id={ helpId } className="form-text text-muted">{ props.help }</small> }

      <ErrorMessage meta={ meta }/>
    </div>
  );
}

TextField.propTypes = {
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
};

TextField.defaultProps = {
  disabled: false,
  label: '',
  placeholder: '',
  required: false,
  readonly: false,
  classes: '',
};

// Exported as a workaround due to Storybook Docs addon not processing wrapped components properly for generated Docs.
export { TextField };

export default withForwardRef(TextField);