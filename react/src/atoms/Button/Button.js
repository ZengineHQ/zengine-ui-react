import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Button = function (props) {
  return (
    <button type={ props.type } onClick={ props.onClick }>
      { props.children }
    </button>
  );
};

Button.propTypes = exact({
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([
    'default',
    'primary',
    'subdued',
  ]),
  type: PropTypes.string,
});

Button.defaultProps = {
  onClick: () => null,
  theme: 'primary',
  type: 'button',
};

export default Button;
