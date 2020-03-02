import React, { useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Table, Widget } from '../../api';
import useSyntaxHighlighter from '../useSyntaxHighlighter';
import SectionHeader from '../../api/atoms/SectionHeader/SectionHeader';
import MenuSlideOut from '../../api/organisms/MenuSlideOut/MenuSlideOut';

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

const DemoData = ({ row }) => (
  <ul>
    <li>Form Name 01</li>
    <li>Form Name 02</li>
    <li>{ row[1] }</li>
    <li>{ row[2] }</li>
  </ul>
);

export const Portals = () => {
  // In order to attach the slideOut to the table we must grab a ref for the table and pass it along.
  const ref = useRef(null);

  // Data fetching callback we pass the MenuSlideOut, this is done like this so we lazy-load all data used.
  // It should return a component which displays the loaded data.
  const getData = row => <DemoData row={ row } />;

  const headers = ['Title', 'Something Else', 'Date', ''];
  const rows = [
    ['Title Information', 'Some Info', 'March 2020'],
    ['Other Title', 'Other Info', 'June 2020'],
    ['Third Title', 'Third Info', 'April 29 1992'],
  ].map(row => {
    const slideOut = (
      <MenuSlideOut
        target={ ref }
        title={ `Associated Data ${ row[0] }` }
        data={ () => getData(row) }
      >
        <Button theme="link">View Data</Button>
      </MenuSlideOut>
    );
    row.push(slideOut);
    return row;
  });

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
        body={ <Table headers={ headers } rows={ rows } classes="table-borderless table-hover" /> }
        footer={ (
          <div className="text-center">
            <Button onClick={ action('clicked footer button') }>Set Assignments</Button>
          </div>
        ) }
      />

      <hr className="mt-5 mb-3" />

      This template utilizes the following components:

      <ul>
        <li><Button theme="link" onClick={ linkTo('Organisms/Widget') } classes="p-0">Widget</Button></li>
        <li><Button theme="link" onClick={ linkTo('Organisms/Table') } classes="p-0">Table</Button></li>
        <li><Button theme="link" onClick={ linkTo('Atoms/Button') } classes="p-0">Button</Button></li>
        <li><Button theme="link" onClick={ linkTo('Organisms/MenuSlideOut') } classes="p-0">Menu Slide Out</Button></li>
      </ul>

      { useSyntaxHighlighter(story) }
    </>
  );
};
