import React from 'react';
import { render } from '@testing-library/react';

import MenuSlideOut from './MenuSlideOut';

test('Renders a div HTML tag', () => {
  const { container } = render(<MenuSlideOut />);
  expect(container.getElementsByTagName('div')).toHaveProperty('length', 1);
});

// test('Adds a default class', () => {
//   const { container } = render(<MenuSlideOut />);
//   expect(container.firstChild).toHaveClass('card');
// });
//
