import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A MenuSlideOut is a slide-out context menu for performing actions related to a selected item, usually from
 * a list or table.
 */
function MenuSlideOut(props) {
  return (
    <div className={ classNames(['org-menu-slideout', props.classes]) }>
      @TODO MENU SLIDE OUT
    </div>
  );
}

MenuSlideOut.propTypes = {
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

MenuSlideOut.defaultProps = {
  classes: ''
};

export default MenuSlideOut;
