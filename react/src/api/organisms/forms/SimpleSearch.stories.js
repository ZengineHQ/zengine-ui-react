import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import SimpleSearch from './SimpleSearch';

export default {
  title: 'Organisms/Forms/SimpleSearch',
  component: SimpleSearch,
  parameters: {
    notes: 'Use this to generate an a simple search form.',
  },
};

export const Default = () => <SimpleSearch onSubmit={s => action(`Searched for: ${s}`)}/>;

export const Playground = () => (
  <SimpleSearch
    label={ text('Label', 'Find stuff') }
    placeholder={ text('Placeholder', 'placeholder')}
    classes={ text('Form Classes', '')}
    onSubmit={s => action(`Searched for: ${s}`)}
  />
);
