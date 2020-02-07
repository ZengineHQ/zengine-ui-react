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
  // useEffect(() => {
  //   setTimeout(() => {
  //     const id = document.getElementById('storybook-panel-root');
  //     const xpath = '//button[text()="Knobs"]';
  //     const el = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  //     console.warn('el', el);
  //     console.warn('id', id);
  //     console.warn('document', document);
  //     console.warn('window.frameElement', window.frameElement);
  //     console.warn('parent', window.frameElement.parentNode.parentNode.parentNode.parentNode);
  //     // el.click();
  //   }, 1000);
  // }, []);
  return (
    <PageTitle classes={ text('Classes', 'class-one') }>
      { text('Title', 'Click-bait Title') }
    </PageTitle>
  );
};
