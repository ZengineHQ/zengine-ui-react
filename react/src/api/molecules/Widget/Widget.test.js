import React from 'react';
import { render } from '@testing-library/react';

import Widget from './Widget';
import { Button } from '../../index';

test('Renders an article HTML tag', () => {
  const { container } = render(<Widget />);
  expect(container.getElementsByTagName('article')).toHaveProperty('length', 1);
});

test('Adds a default class to the article', () => {
  const { container } = render(<Widget />);
  expect(container.firstChild).toHaveClass('org-widget');
});

test('Adds all content if specified', () => {
  const { container, getByText } = render(<Widget header="WidgetHeader" body="WidgetBody" footer="WidgetFooter" />);
  expect(container.getElementsByTagName('header')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('footer')).toHaveProperty('length', 1);
  const div = container.getElementsByTagName('div');
  expect(div).toHaveProperty('length', 1);
  expect(div[0]).toHaveClass('body');
  expect(getByText('WidgetHeader')).toBeTruthy();
  expect(getByText('WidgetBody')).toBeTruthy();
  expect(getByText('WidgetFooter')).toBeTruthy();
});

test('Omits footer altogether if left blank', () => {
  const { container } = render(<Widget header="WidgetHeader" body="WidgetBody" />);
  expect(container.getElementsByTagName('footer')).toHaveProperty('length', 0);
});

test('Renders React components in header, body and footer', () => {
  const { container, getByText } = render(<Widget
    header={<Button>HeaderButton</Button>}
    body={<Button>BodyButton</Button>}
    footer={<Button>FooterButton</Button>}
  />);
  expect(container.getElementsByTagName('button')).toHaveProperty('length', 3);
  expect(getByText('HeaderButton')).toBeTruthy();
  expect(getByText('BodyButton')).toBeTruthy();
  expect(getByText('FooterButton')).toBeTruthy();
});
