import React from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Table, Widget } from '../../api';
import useSyntaxHighlighter from '../useSyntaxHighlighter';
import SectionHeader from '../../api/atoms/SectionHeader/SectionHeader';

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
  <>
    <SectionHeader>Process: Scholarship Award</SectionHeader>

    <Widget
      body={ <Table headers={ headers } rows={ rows } classes="table-borderless table-hover"/> }
      footer={ <Button onClick={ action('clicked footer button') }>Set Assignments</Button> }
    />
  </>
  `;

  return (
    <>
      <SectionHeader>Process: Scholarship Award</SectionHeader>

      <Widget
        body={ <Table headers={ headers } rows={ rows }/> }
        footer={ <div className="text-center"><Button onClick={ action('clicked footer button') }>Set Assignments</Button></div> }
      />

      <hr className="mt-5 mb-3"/>

      This template utilizes the following components:

      <ul>
        <li><Button theme="link" onClick={linkTo('Organisms/Widget')} classes="p-0">Widget</Button></li>
        <li><Button theme="link" onClick={linkTo('Organisms/Table')} classes="p-0">Table</Button></li>
        <li><Button theme="link" onClick={linkTo('Atoms/Button')} classes="p-0">Button</Button></li>
      </ul>

      { useSyntaxHighlighter(story) }
    </>
  );
};
