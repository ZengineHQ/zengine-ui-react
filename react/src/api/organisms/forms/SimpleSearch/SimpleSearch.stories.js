import React from 'react';
import { decorate } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import SimpleSearch from './SimpleSearch';

export default {
  title: 'Organisms/Forms/SimpleSearch',
  component: SimpleSearch,
  parameters: {
    notes: 'Use this to generate an a simple search form.',
    jest: ['SimpleSearch.test.js'],
  },
};

const firstArg = decorate([args => args.slice(0, 1)]);

export const Default = () => <SimpleSearch onSubmit={firstArg.action('Search form submitted')}/>;

export const ButtonLabel = () => (
  <SimpleSearch
    onSubmit={firstArg.action('Search form submitted')}
    labelInput="Button Label Search"
    labelSubmit="Execute Action!"
  />
);

export const CustomClasses = () => (
  <SimpleSearch
    onSubmit={firstArg.action('Search form submitted')}
    classes="foo bar"
    labelInput="Custom Classes Search"
  />
);

export const Playground = () => (
  <SimpleSearch
    labelInput={ text('Input Label', 'Find stuff') }
    labelSubmit={ text('Button Label', 'GO!') }
    placeholder={ text('Placeholder', 'placeholder')}
    classes={ text('Form Classes', '')}
    onSubmit={firstArg.action('Search form submitted')}
  />
);
