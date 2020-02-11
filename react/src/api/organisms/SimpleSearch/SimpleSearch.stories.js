import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import SimpleSearch from './SimpleSearch';
import useDefaultPanel from '../../util/useDefaultPanel';

export default {
  title: 'Organisms/SimpleSearch',
  component: SimpleSearch,
  parameters: {
    jest: ['SimpleSearch.test.js'],
  },
};

export const Default = () => <SimpleSearch onSubmit={ action('Search form submitted') }/>;

export const WithButton = () => (
  <SimpleSearch
    onSubmit={ action('Search form submitted') }
    labelInput="Button Search"
    showSubmit={ true }
  />
);

export const ButtonLabel = () => (
  <SimpleSearch
    onSubmit={ action('Search form submitted') }
    labelInput="Custom Button Label Search"
    showSubmit={ true }
    labelSubmit="Go!"
  />
);

export const CustomClasses = () => (
  <SimpleSearch
    onSubmit={ action('Search form submitted') }
    classes="foo bar"
    labelInput="Custom Classes Search"
  />
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <SimpleSearch
      labelInput={ text('Input Label', 'Find stuff') }
      showSubmit={ boolean('Show Submit', false) }
      labelSubmit={ text('Button Label', 'Search') }
      placeholder={ text('Placeholder', 'placeholder') }
      classes={ text('Form Classes', '') }
      onSubmit={ action('Search form submitted') }
    />
  );
};
