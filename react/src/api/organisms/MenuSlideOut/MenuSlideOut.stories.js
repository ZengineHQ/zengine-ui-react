import React from 'react';
import { text } from '@storybook/addon-knobs';

import MenuSlideOut from './MenuSlideOut';
import useDefaultPanel from '../../../storybook/useDefaultPanel';
import { Button } from '../../index';

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

export const Default = () => {

  return (
    <>
      <Button>Toggle slide out</Button>
      <MenuSlideOut title="Associated Data">
        <DemoData/>
      </MenuSlideOut>
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
