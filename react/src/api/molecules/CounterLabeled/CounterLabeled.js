import React from 'react';
import PropTypes from 'prop-types';

/**
 * Counted Labeled displays a large numeric text with a smaller label below it.
 *
 * Use this to display summary info such as KPIs.
 */
function CounterLabeled(props) {
  return (
    <article className="d-flex flex-column align-items-center" title={`${props.count} ${props.label}`}>
      <span className="counter-labeled">{ props.count }</span>
      <small>{ props.label }</small>
    </article>
  );
}

CounterLabeled.propTypes = {
  count: PropTypes.number,
  label: PropTypes.string,
};

CounterLabeled.defaultProps = {
  count: 0,
  label: 'Items',
};

export default CounterLabeled;
