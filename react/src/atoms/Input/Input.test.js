import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';

test('Renders input with specified type', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toHaveAttribute('type', 'text');
});

test('Marks input as required when specified', () => {
  const { container } = render(<Input required={ true }/>);
  expect(container.firstChild).toHaveAttribute('required');
});
