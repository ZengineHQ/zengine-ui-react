import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Counted Labeled displays a large numeric text with a smaller label below it.
 *
 * Use this to display summary info such as KPIs.
 */
function CounterLabeled(props) {
  return (
    <article
      className={ classNames(['mol-counter-labeled d-flex flex-column align-items-center text-dark', props.classes]) }
      title={ `${ props.count } ${ props.label }` }
    >
      <small>{ props.label }</small>
    </article>
  );
}

CounterLabeled.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string,
  classes: PropTypes.string,
};

CounterLabeled.defaultProps = {
  count: 0,
  label: 'Items',
  classes: '',
};

export default CounterLabeled;
