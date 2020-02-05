import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// import FieldDefinitionShape from './shapes';
import Button from '../atoms/Button/Button';

function YidhraForm(props) {
  const {
    initialValues,
    onSubmit,
    labelReset,
    labelSubmit,
    showReset,
    validate
  } = props;

  const validateForm = values => {
    let errors = {};

    if (validate && typeof validate === 'function') {
      errors = { ...errors, ...validate(values) };
    }

    return errors;
  };

  return (
    <Formik
      initialValues={ initialValues || {} }
      validateOnMount={ true }
      validateOnBlur={ true }
      validateOnChange={ true }
      onSubmit={ (values, actions) => {
        actions.setSubmitting(false);
        onSubmit(values);
        actions.resetForm();
      } }
      validate={ validateForm }
    >
      {({ dirty, isValid, isSubmitting }) => (
        <Form noValidate>
          <div className="form-body">
            { props.children }
          </div>

          <div className="form-actions">
            <Button
              type="submit"
              theme="primary"
              aria-label={ labelSubmit }
              disabled={ isSubmitting || !dirty || !isValid }
            >
              { labelSubmit }
            </Button>

            { showReset && dirty && (
              <Button type="reset" theme="subdued" aria-label={ labelReset } disabled={ isSubmitting }>
                { labelReset }
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}

YidhraForm.propTypes = {
  /**
   * Pass elements to be rendered into the form.
   **/
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Array of field definitions that make up the form.
   **/
  // fields: PropTypes.arrayOf(PropTypes.shape(FieldDefinitionShape)),
  /**
   * Callback that will receive valid, submitted form values.
   **/
  onSubmit: PropTypes.func.isRequired,
  /**
   * Initial data, if any, to populate the form with.
   **/
  initialValues: PropTypes.object,
  /**
   * Customize the label for the "Reset Form" button.
   **/
  labelReset: PropTypes.string,
  /**
   * Customize the label for the "Save Form" button.
   **/
  labelSubmit: PropTypes.string,
  /**
   * Whether or not to display the reset button.
   **/
  showReset: PropTypes.bool,
  /**
   * Additional custom form-level validation function.
   **/
  validate: PropTypes.func,
};

YidhraForm.defaultProps = {
  initialData: {},
  labelReset: 'Reset Form',
  labelSubmit: 'Save Form',
  showReset: true
};

export default YidhraForm;
