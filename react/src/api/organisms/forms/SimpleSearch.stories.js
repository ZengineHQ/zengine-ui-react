import React from 'react';
import { decorate } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import SimpleSearch from './SimpleSearch';

export default {
  title: 'Organisms/Forms/SimpleSearch',
  component: SimpleSearch,
  parameters: {
    notes: 'Use this to generate an a simple search form.',
  },
};

const firstArg = decorate([args => args.slice(0, 1)]);

export const Default = () => <SimpleSearch onSubmit={firstArg.action('Search form submitted')}/>;

export const Playground = () => (
  <SimpleSearch
    label={ text('Label', 'Find stuff') }
    placeholder={ text('Placeholder', 'placeholder')}
    classes={ text('Form Classes', '')}
    onSubmit={firstArg.action('Search form submitted')}
  />
);
