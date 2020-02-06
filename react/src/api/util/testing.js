import React from 'react';
import { Formik } from 'formik';

function TestForm(props) {
  return (
    <Formik initialValues={{}} onSubmit={() => null}>
      { props.children }
    </Formik>
  );
}

export default TestForm;
