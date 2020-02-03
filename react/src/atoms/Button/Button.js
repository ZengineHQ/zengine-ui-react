import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import cc from 'classcat';

const Button = function (props) {
  return (
    <button
      type={ props.type }
      onClick={ props.onClick }
      className={cc({
        primary: props.theme === 'primary',
        slim: props.theme === 'subdued',
      })}
      disabled={ props.disabled }
      aria-disabled={ props.disabled }
    >
      { props.children }
    </button>
  );
};

Button.propTypes = exact({
  children: PropTypes.string,
  /*
   * Please work
   **/
  disabled: PropTypes.bool,
  /**
   * Please work
   **/
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([
    '',
    'primary',
    'subdued',
  ]),
  type: PropTypes.oneOf([
    'button',
    'reset',
    'submit'
  ]),
});

Button.defaultProps = {
  disabled: false,
  onClick: () => null,
  theme: '',
  type: 'button',
};

export default Button;
