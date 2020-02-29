import React from 'react';
import { text } from '@storybook/addon-knobs';

import MenuSlideOut from './MenuSlideOut';
import useDefaultPanel from '../../../storybook/useDefaultPanel';
import { Button } from '../../index';
import Table from '../Table/Table';
import { action } from '@storybook/addon-actions';

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
    <MenuSlideOut title="Associated Data" data={ () => <DemoData/> }>
      <Button>Toggle slide out</Button>
    </MenuSlideOut>
  </>
);

export const TableRow = () => {
  const data = [
    ['John Smith', 'john@smith.com', '25'],
    ['Jane Doe', 'janedoe@hotmail.com', '25'],
    ['Highlander', 'one@therecanonlybe.com', 'Infinte']
  ];
  const getData = row => <DemoData row={ row }/>;
  const addSlideOut = row => {
    const slideOut = (
      <MenuSlideOut title={ `Associated Data ${ row[0] }` } data={ () => getData(row) }>
        <Button>View Data</Button>
      </MenuSlideOut>
    );
    row.push(slideOut);
    return row;
  };

  return (
    <>
      <Table
        headers={ ['Name', 'Email ', 'Age', 'Actions'] }
        rows={ data.map(addSlideOut) }
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
    >
      <DemoData/>
    </MenuSlideOut>
  );
};
