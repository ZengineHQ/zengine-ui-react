import React from 'react';
import { render } from '@testing-library/react';

import CounterLabeled from './CounterLabeled';

test('Renders an article HTML tag', () => {
  const { container } = render(<CounterLabeled />);
  expect(container.getElementsByTagName('article')).toHaveProperty('length', 1);
});

test('Adds a default class', () => {
  const { container } = render(<CounterLabeled />);
  expect(container.firstChild).toHaveClass('mol-counter-labeled');
});

test('Renders with specified count and text', () => {
  const { container } = render(<CounterLabeled count={1} word={'monkey'} />);
  const count = container.getElementsByTagName('span')[0];
  const text = container.getElementsByTagName('small')[0];
  expect(count).toHaveTextContent('1');
  expect(text).toHaveTextContent('monkey');
});

test('Formats plural words', () => {
  const { container } = render(<CounterLabeled count={33} word={'monkey'} />);
  const count = container.getElementsByTagName('span')[0];
  const text = container.getElementsByTagName('small')[0];
  expect(count).toHaveTextContent('33');
  expect(text).toHaveTextContent('monkeys');
});
