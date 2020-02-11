import React from 'react';
import { Formik } from 'formik';

export const MockForm = props => {
  return (
    <Formik initialValues={{}} onSubmit={() => null}>
      { props.children }
    </Formik>
  );
};
