import React from 'react';
import PropTypes from 'prop-types';

/**
 * Table Dashboard displays tabular data in an HTML table.
 *
 * Accepts an array of table header names in the `headers` prop and an array of data to display, where each
 * item in the array represents a row and is itself an array where each item is a column in the row.
 *
 * You can add anything in columns, including React components!
 *
 * ```
 * <TableDashboard
 *  headers={['Name', 'Age', 'Actions']}
 *  rows={[
 *    ['John Smith', '99', <Button onClick={ ... }>Do Something</Button>],
 *    ['Jane Doe', '99', <Button onClick={ ... }>Do Something</Button>],
 *  ]} />.
 * ```
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

TableDashboard.propTypes = {
  /**
   * Table headers.
   **/
  headers: PropTypes.arrayOf(PropTypes.string),
  /**
   * Table contents; an array of rows where each row is an array of columns containing either a string or a React component.
   **/
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))),
};

TableDashboard.defaultProps = {
  headers: [],
  rows: []
};

export default TableDashboard;
