import React from 'react';
import PropTypes from 'prop-types';
import isFunction from 'lodash/isFunction';

/**
 * Table Dashboard displays tabular data in an HTML table.
 *
 * In order to add a custom button to each table row you can pass it in as a child wrapped in a function.
 * The function receives the current row index as well as the entire row object as arguments.
 *
 * ```
 * <TableDashboard headers={[]} rows={[]}>
 *
 *  { ({ row, index }) => (
 *
 *    <Button onClick={ ... }>Do Something</Button>
 *
 *  ) }
 *
 * </TableDashboard>
 * ```
 */
function TableDashboard(props) {
  const hasButton = isFunction(props.children);
  const displayButton = (row, index) => {
    return props.children({ row, index });
  };

  return (
    <table className="org-table-dashboard">
      <thead>
      <tr>
        { props.headers.map((name, index) => (
          <th key={ index }>{ name }</th>
        )) }

        { hasButton && (
          <th>{ props.buttonColumn }</th>
        ) }
      </tr>
      </thead>
      <tbody>
      { props.rows.map((row, index) => (
        <tr key={ index }>
          { row.map((value, j) => (
            <td key={ j }>{ value }</td>
          )) }

          { hasButton && <td>{ displayButton(row, index) }</td> }
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
   * Table contents; an array of rows where each row is an array of columns.
   **/
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  /**
   * Heading for the last table column which contains custom buttons, only appears if there are buttons.
   **/
  buttonColumn: PropTypes.string
};

TableDashboard.defaultProps = {
  headers: [],
  rows: [],
  buttonColumn: 'Actions'
};

export default TableDashboard;
