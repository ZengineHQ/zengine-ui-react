import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Section Header displays an `h2` HTML element.
 *
 * It's really up to you whether you want to use this component or just copy the 1 liner that is it's markup.
 */
function SectionHeader(props) {
  return (
    <h2 className={ props.classes }>{ props.children }</h2>
  );
}

SectionHeader.propTypes = {
  /**
   * Only text may be passed as a child to be used as the section title.
   **/
  children: PropTypes.string,
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

SectionHeader.defaultProps = {
  classes: ''
};

export default SectionHeader;
