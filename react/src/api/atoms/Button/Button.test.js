import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

test('Renders with specified text', () => {
  const { getByText } = render(<Button>Hello</Button>);
  expect(getByText('Hello')).toBeTruthy()
});

test('Adds type attribute by default', () => {
  const { container } = render(<Button>Hello</Button>);
  expect(container.firstChild).toHaveAttribute('type', 'button');
});

test('Sets type attribute when specified', () => {
  const { container } = render(<Button type="submit">Hello</Button>);
  expect(container.firstChild).toHaveAttribute('type', 'submit');
});

test('Sets theme attribute when specified', () => {
  const { container } = render(<Button theme="primary">Hello</Button>);
  expect(container.firstChild).toHaveClass('primary');
});

test('Disables button when specified', () => {
  const { container } = render(<Button disabled={ true }>Hello</Button>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Displays aria-disabled attribute when disabled', () => {
  const { container } = render(<Button disabled={ true }>Hello</Button>);
  expect(container.firstChild).toHaveAttribute('aria-disabled',  'true');
});
