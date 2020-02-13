import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../index';
import TableDashboard from './TableDashboard';

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
      headers={ ['Name', 'Email ', 'Age', 'Actions'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25', <Button onClick={ action('Button clicked for row 1') }>Do Something</Button>],
        ['Jane Doe', 'janedoe@hotmail.com', '25', <Button onClick={ action('Button clicked for row 2') }>Do Something</Button>],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte', <Button onClick={ action('Button clicked for row 3') }>Do Something</Button>]]
      }
    />
  );
};

export const CustomClasses = () => {
  return (
    <TableDashboard
      classes="table-dark"
      headers={ ['Name', 'Email ', 'Age'] }
      rows={ [
        ['John Smith', 'john@smith.com', '25'],
        ['Jane Doe', 'janedoe@hotmail.com', '25'],
        ['Highlander', 'one@therecanonlybe.com', 'Infinte']]
      }
    />
  );
};
