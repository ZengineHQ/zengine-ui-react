import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays an image.
 */
function Image(props) {
  return (
    <img
      src={ props.src }
      alt={ props.alt }
      height={ props.height }
      width={ props.width }
      className={ props.classes }
    />
  );
}

Image.propTypes = {
  /**
   * Image source url or inline data.
   **/
  src: PropTypes.string.isRequired,
  /**
   * Image alternate text; required for accessibility.
   **/
  alt: PropTypes.string.isRequired,
  /**
   * Image height.
   **/
  height: PropTypes.number,
  /**
   * Image width.
   **/
  width: PropTypes.number,
  /**
   * HTML classes to be added as-is to the button.
   **/
  classes: PropTypes.string,
};

Image.defaultProps = {
  classes: '',
};

export default Image;
