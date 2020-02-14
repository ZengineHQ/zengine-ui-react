import React from 'react';
import { text } from '@storybook/addon-knobs';

import PageTitle from './PageTitle';
import useDefaultPanel from '../../../util/useDefaultPanel';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  parameters: {
    jest: ['PageTitle.test.js'],
  },
};

export const Default = () => <PageTitle>Page Title</PageTitle>;

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <PageTitle classes={ text('Classes', 'class-one') }>
      { text('Title', 'Click-bait Title') }
    </PageTitle>
  );
};
