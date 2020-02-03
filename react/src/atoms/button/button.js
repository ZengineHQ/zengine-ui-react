import React, { memo } from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

const Button = memo(function Button (props) {
  return (
    <button type={ props.type } onClick={ props.onClick }>
      { props.children }
    </button>
  );
});

Button.propTypes = exact({
  onClick: PropTypes.func,
  type: PropTypes.string,
});

Button.defaultProps = {
  onClick: () => null,
  type: 'button',
};

export default Button;
