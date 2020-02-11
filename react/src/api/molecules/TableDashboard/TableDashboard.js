import React from 'react';
import PropTypes from 'prop-types';
import CounterLabeled from '../CounterLabeled/CounterLabeled';

/**
 * Table Dashboard displays tabular data in an HTML table.
 */
function TableDashboard(props) {
  return (
    <table className="org-table-dashboard">
      <thead>
      <tr>
        { props.headers.map((name, index) => (
          <th key={ index }>{ name }</th>
        )) }
      </tr>
      </thead>
      <tbody>
      { props.rows.map((row, index) => (
        <tr key={ index }>
          { row.map((value, j) => (
            <td key={ j }>{ value }</td>
          )) }
        </tr>
      )) }
      </tbody>
    </table>
  );
}

CounterLabeled.propTypes = {
  /**
   * Table headers.
   **/
  headers: PropTypes.arrayOf(PropTypes.string),
  /**
   * Table contents; an array of rows where each row is an array of columns.
   **/
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

CounterLabeled.defaultProps = {
  headers: [],
  rows: []
};

export default TableDashboard;
