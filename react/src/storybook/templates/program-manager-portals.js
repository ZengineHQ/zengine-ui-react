import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, TableDashboard, Widget } from '../../api';
import useSyntaxHighlighter from '../useSyntaxHighlighter';

export default {
  title: 'Templates/ProgramManager',
  parameters: {
    options: {
      showPanel: false,
    },
    docs: {
      disable: true,
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

  const story = `
    <Widget
      header="Process: Scholarship Award"
      body={ <TableDashboard headers={ headers } rows={ rows }/> }
      footer={ <Button onClick={ action('clicked footer button') }>Set Assignments</Button> }
    />
  `;

  return (
    <>
      <Widget
        header="Process: Scholarship Award"
        body={ <TableDashboard headers={ headers } rows={ rows }/> }
        footer={ <Button onClick={ action('clicked footer button') }>Set Assignments</Button> }
      />

      <hr className="mt-5 mb-3"/>

      <p>
        This template utilizes the following components:

        <ul>
          <li><a href="javascript:" onClick={linkTo('Organisms/Widget')}>Widget</a></li>
          <li><a href="javascript:" onClick={linkTo('Organisms/TableDashboard')}>TableDashboard</a></li>
          <li><a href="javascript:" onClick={linkTo('Atoms/Button')}>Button</a></li>
        </ul>
      </p>

      { useSyntaxHighlighter(story) }
    </>
  );
};
