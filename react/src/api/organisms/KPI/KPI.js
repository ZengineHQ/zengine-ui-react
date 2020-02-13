import React from 'react';
import PropTypes from 'prop-types';

import CounterLabeled from '../../molecules/CounterLabeled/CounterLabeled';

/**
 * KPI displays a group of Counter Labeled elements in containing box.
 */
function KPI(props) {
  return (
    <section className="row">
      { props.items.map((item, index) => (
        <div className="col-sm-4" key={ index }>
          <div className="card">
            <div className="card-body">
              <CounterLabeled { ...item } />
            </div>
          </div>
        </div>
      )) }
    </section>
  );
}

KPI.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    count: PropTypes.number,
    label: PropTypes.string,
  }))
};

KPI.defaultProps = {
  items: []
};

export default KPI;
