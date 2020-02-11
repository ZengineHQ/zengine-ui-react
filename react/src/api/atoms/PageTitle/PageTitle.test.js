import React from 'react';
import { render } from '@testing-library/react';

import PageTitle from './PageTitle';

test('Renders the h1 HTML tag', () => {
  const { container } = render(<PageTitle>Hello</PageTitle>);
  expect(container.getElementsByTagName('h1')).toHaveProperty('length', 1);
});

test('Renders with specified text', () => {
  const { getByText } = render(<PageTitle>Hello</PageTitle>);
  expect(getByText('Hello')).toBeTruthy();
});

test('Adds a default class', () => {
  const { container } = render(<PageTitle>Hello</PageTitle>);
  expect(container.firstChild).toHaveClass('atom-page-title');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<PageTitle classes="foo bar baz">Hello</PageTitle>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});
