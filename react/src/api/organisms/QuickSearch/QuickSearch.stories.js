import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import QuickSearch from './QuickSearch';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Organisms/QuickSearch',
  component: QuickSearch,
  parameters: {
    jest: ['QuickSearch.test.js'],
  },
};

export const Default = () => <QuickSearch onSubmit={ action('Search form submitted') }/>;

export const WithButton = () => (
  <QuickSearch
    onSubmit={ action('Search form submitted') }
    labelInput="Button Search"
    showSubmit={ true }
  />
);

export const ButtonLabel = () => (
  <QuickSearch
    onSubmit={ action('Search form submitted') }
    labelInput="Custom Button Label Search"
    showSubmit={ true }
    labelSubmit="Go!"
  />
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <QuickSearch
      labelInput={ text('Input Label', 'Find stuff') }
      showSubmit={ boolean('Show Submit', false) }
      labelSubmit={ text('Button Label', 'Search') }
      placeholder={ text('Placeholder', 'placeholder') }
      classes={ text('Form Classes', '') }
      onSubmit={ action('Search form submitted') }
    />
  );
};
