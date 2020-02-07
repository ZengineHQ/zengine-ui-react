import React, { useEffect } from 'react';
import { text } from '@storybook/addon-knobs';

import PageTitle from './PageTitle';

export default {
  title: 'Atoms/PageTitle',
  component: PageTitle,
  parameters: {
    jest: ['PageTitle.test.js'],
  },
};

export const Default = () => <PageTitle>Page Title</PageTitle>;

export const Playground = () => {
  return (
    <PageTitle classes={ text('Classes', 'class-one') }>
      { text('Title', 'Click-bait Title') }
    </PageTitle>
  );
};
