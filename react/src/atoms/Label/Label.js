import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Label = function (props) {
  return (
    <label>
      { props.children }
    </label>
  );
};

Label.propTypes = exact({});

export default Label;
