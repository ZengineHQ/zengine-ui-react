import React from 'react';
import { render } from '@testing-library/react';

import ErrorMessage from './ErrorMessage';

test('Renders a div HTML tag', () => {
  const { container } = render(<ErrorMessage meta={{touched: true, error: 'Hello'}}/>);
  expect(container.getElementsByTagName('div')).toHaveProperty('length', 1);
});

// test('Renders with specified text', () => {
//   const { getByText } = render(<PageTitle>Hello</PageTitle>);
//   expect(getByText('Hello')).toBeTruthy();
// });
//
// test('Adds a default class', () => {
//   const { container } = render(<PageTitle>Hello</PageTitle>);
//   expect(container.firstChild).toHaveClass('atom-page-title');
// });
//
// test('Adds custom classes when specified', () => {
//   const { container } = render(<PageTitle classes="foo bar baz">Hello</PageTitle>);
//   expect(container.firstChild).toHaveClass('foo bar baz');
// });
