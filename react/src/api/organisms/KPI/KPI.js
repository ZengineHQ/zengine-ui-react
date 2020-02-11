import React from 'react';
import PropTypes from 'prop-types';

import CounterLabeled from '../../molecules/CounterLabeled/CounterLabeled';

/**
 * KPI will display a group of Counter Labeled elements.
 */
function KPI(props) {
  return (
    <section className="org-kpi">
      { props.items.map(item => (
        <CounterLabeled { ...item } />
      ))}
    </section>
  );
}

KPI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
    suffix: PropTypes.string
  }))
};

KPI.defaultProps = {
  items: []
};

export default KPI;
