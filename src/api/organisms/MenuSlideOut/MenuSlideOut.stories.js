import React, { useRef } from 'react';
import { text } from '@storybook/addon-knobs';

import MenuSlideOut from './MenuSlideOut';
import useDefaultPanel from '../../../storybook/useDefaultPanel';
import { Button } from '../../index';
import Table from '../Table/Table';

export default {
  title: 'Organisms/MenuSlideOut',
  component: MenuSlideOut,
  parameters: {
    jest: ['MenuSlideOut.test.js'],
  },
};

const DemoData = () => (
  <ul>
    <li>Form Name 01</li>
    <li>Form Name 02</li>
    <li>Form Name 03</li>
    <li>Form Name 04</li>
  </ul>
);

export const Default = () => (
  <>
    <MenuSlideOut title="Associated Data" data={ () => <DemoData /> }>
      <Button>Toggle slide out</Button>
    </MenuSlideOut>
  </>
);

export const TitleIcon = () => (
  <>
    <MenuSlideOut title="Associated Data" data={ () => <DemoData /> } titleIcon="camera">
      <Button>Toggle slide out</Button>
    </MenuSlideOut>
  </>
);

export const TableRow = () => {
  // Sample data set as one might receive from an API endpoint or database.
  const externalData = [
    ['John Smith', 'john@smith.com', '25'],
    ['Jane Doe', 'janedoe@hotmail.com', '25'],
    ['Highlander', 'one@therecanonlybe.com', 'Infinte']
  ];

  // In order to attach the slideOut to the table we must grab a ref for the table and pass it along.
  const ref = useRef(null);

  // Data fetching callback we pass the MenuSlideOut, this is done like this so we lazy-load all data used.
  // It should return a component which displays the loaded data.
  const getData = row => <DemoData row={ row } />;

  // This is just a way of attaching our slideOut to each row in the table. Presumably you will have a way of
  // iterating over your `externalData` and doing something similar.  We can then use each row's data to build
  // the menu slide out.
  const addSlideOut = row => {
    const slideOut = (
      <MenuSlideOut
        target={ ref }
        title={ `Associated Data ${ row[0] }` }
        data={ () => getData(row) }
      >
        <Button>View Data</Button>
      </MenuSlideOut>
    );
    row.push(slideOut);
    return row;
  };

  // Finally render our table component and attach a slideOut to each row.
  return (
    <>
      <Table
        ref={ ref }
        headers={ ['Name', 'Email ', 'Age', 'Actions'] }
        rows={ externalData.map(addSlideOut) }
      />
    </>
  );
};

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MenuSlideOut
      title={ text('Title', 'Associated Data') }
      classes={ text('Classes', 'class-two') }
      data={ () => <DemoData /> }
      titleIcon={ text('Title Icon', 'camera') }
    >
      <Button>Do the thing</Button>
    </MenuSlideOut>
  );
};
