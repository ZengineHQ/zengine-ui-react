import React from 'react';
import { render } from '@testing-library/react';

import Label from './Label';

test('renders component', () => {
  const { getByText } = render(<Label>Hello</Label>);
  expect(getByText('Hello')).toBeTruthy()
});
