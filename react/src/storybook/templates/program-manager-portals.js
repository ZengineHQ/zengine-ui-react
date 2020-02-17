import React from 'react';
import { action } from '@storybook/addon-actions';

import { Button, TableDashboard, Widget } from '../../api';

export default {
  title: 'Templates/ProgramManager',
  parameters: {
    options: {
      showPanel: false
    }
  }
};

export const Portals = () => {
  const headers = ['Title', 'Something Else', 'Date', ''];
  const rows = [
    [
      'Title Information',
      'Some Info',
      'March 2020',
      <Button onClick={ action('clicked data button row 1') } theme="link">View Data</Button>,
    ],
    [
      'Other Title',
      'Other Info',
      'April 2020',
      <Button onClick={ action('clicked data button row 2') } theme="link">View Data</Button>,
    ],
  ];

  return (
    <Widget
      header="Process: Scholarship Award"
      body={ <TableDashboard headers={ headers } rows={ rows }/> }
      footer={ <Button onClick={ action('clicked footer button') }>Set Assignments</Button> }
    />
  );
};
