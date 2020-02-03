import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';

test('Renders text input', () => {
  const { container } = render(<TextInput label="foo" />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Sets label when specified', () => {
  const { getByText } = render(<TextInput label="foo" />);
  expect(getByText('foo')).toBeTruthy()
});

test('Marks input as required when specified', () => {
  const { container } = render(<TextInput required={ true } label="foo" />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});
