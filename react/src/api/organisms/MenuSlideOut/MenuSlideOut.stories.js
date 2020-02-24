import React from 'react';
import { text } from '@storybook/addon-knobs';

import MenuSlideOut from './MenuSlideOut';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Organisms/MenuSlideOut',
  component: MenuSlideOut,
  parameters: {
    jest: ['MenuSlideOut.test.js'],
  },
};

export const Default = () => <MenuSlideOut/>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <MenuSlideOut
      classes={ text('Classes', 'class-two') }
    />
  );
};
