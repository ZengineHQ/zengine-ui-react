import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import MenuSlideOut from './MenuSlideOut';
import { act } from 'react-dom/test-utils';

const DemoData = () => (
  <ul>
    <li>Form Name 01</li>
    <li>Form Name 02</li>
    <li>Form Name 03</li>
    <li>Form Name 04</li>
  </ul>
);

test('Renders a div HTML tag', () => {
  const { container } = render(<MenuSlideOut data={ () => null } />);
  expect(container.getElementsByTagName('div')).toHaveProperty('length', 1);
});

test('Adds a default class to the wrapper', () => {
  const { container } = render(<MenuSlideOut data={ () => null } />);
  expect(container.firstChild).toHaveClass('d-inline-block');
});

test('Opens the slideOut when triggered', async () => {
  const { container } = render(
    <MenuSlideOut title="Associated Data" data={ () => <DemoData /> } />
  );

  // React container + our inline block container.
  expect(container.parentElement.getElementsByTagName('div').length).toEqual(2);

  act(() => {
    fireEvent.click(container.parentElement.getElementsByTagName('div')[1]);
  });

  // Those 2 containers + the 4 modal divs that make up the slide out component.
  expect(container.parentElement.getElementsByTagName('div').length).toEqual(6);
});

test('Displays the title text in the slideOut', async () => {
  const { container } = render(
    <MenuSlideOut title="Test Data" data={ () => <DemoData /> } />
  );

  act(() => {
    fireEvent.click(container.parentElement.getElementsByTagName('div')[1]);
  });

  // modal-header
  const targetDiv = container.parentElement.getElementsByTagName('div')[4];
  expect(targetDiv).toHaveTextContent('Test Data');
});
