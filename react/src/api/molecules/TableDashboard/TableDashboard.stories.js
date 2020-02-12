import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Button } from '../../index';
import TableDashboard from './TableDashboard';
import useDefaultPanel from '../../util/useDefaultPanel';

export default {
  title: 'Organisms/TableDashboard',
  component: TableDashboard,
  parameters: {
    jest: ['TableDashboard.test.js'],
  },
};

export const Default = () => {
  return (
    <TableDashboard
      headers={ ['Name', 'Email ', 'Age'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25'],
        ['Jane Doe', 'janedoe@hotmail.com', '25'],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte']]
      }
    />
  );
};

export const ActionButton = () => {
  return (
    <TableDashboard
      headers={ ['Name', 'Email ', 'Age'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25'],
        ['Jane Doe', 'janedoe@hotmail.com', '25'],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte']]
      }
    >
      { ({ row, index }) => (
        <Button onClick={ action(`Button clicked for row ${ index }`) }>Do Something</Button>
      ) }
    </TableDashboard>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  const headers = [
    text('Header Col 1', 'Title'),
    text('Header Col 2', 'Email'),
    text('Header Col 3', 'Age'),
  ];

  const rows = [
    [
      text('Row 1 Col 1', 'John Smith'),
      text('Row 1 Col 2', 'john@smith.com'),
      text('Row 1 Col 3', '25'),
    ],
    [
      text('Row 2 Col 1', 'Jane Doe'),
      text('Row 2 Col 2', 'janedoe@hotmail.com'),
      text('Row 2 Col 3', '25'),
    ],
  ];

  return (
    <TableDashboard headers={ headers } rows={ rows }>
      { ({ row, index }) => (
      <Button onClick={ action(`Button clicked for row ${ index }`) }>
        { text('Button Label', 'Edit') }
      </Button>
      ) }
    </TableDashboard>
  );
};
