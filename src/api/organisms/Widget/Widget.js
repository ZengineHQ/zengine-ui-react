import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * A Widget wraps arbitrary content in a box with header, body and footer sections.
 *
 * The content for each of these 3 sections may be either a string or a React component.
 */
function Widget(props) {
  return (
    <div className={classNames(['card', props.classes])}>
      { props.header && (
        <div className="card-header">
          { props.header}
        </div>
      )}

      <div className="card-body">
        { props.body }
      </div>

      { props.footer && (
        <div className="card-footer">
          { props.footer}
        </div>
      )}
    </div>
  );
}

Widget.propTypes = {
  /**
   * Widget header.
   **/
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Widget body.
   **/
  body: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Widget footer.
   **/
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * HTML classes to be added as-is to the HTML element.
   **/
  classes: PropTypes.string,
};

Widget.defaultProps = {
  classes: ''
};

export default Widget;
