import React from 'react';
import { render } from '@testing-library/react';

import Select from './Select';

test('Renders a select HTML tag', () => {
  const { container } = render(<Select/>);
  const select = container.getElementsByTagName('select');
  expect(select).toHaveProperty('length', 1);
});

test('Marks select as required when specified', () => {
  const { container } = render(<Select required={ true }/>);
  expect(container.firstChild).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Select required={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<Select required={ false }/>);
  expect(container.firstChild).not.toHaveAttribute('aria-required');
});

test('Marks select as disabled when specified', () => {
  const { container } = render(<Select disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Select disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Sets select placeholder when specified', () => {
  const { container } = render(<Select placeholder="foo"/>);
  expect(container.getElementsByTagName('option')[0]).toHaveTextContent('foo');
});

test('Sets select name when specified', () => {
  const { container } = render(<Select name="foo"/>);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Sets select id when specified', () => {
  const { container } = render(<Select name="foo" id="bar"/>);
  expect(container.firstChild).toHaveAttribute('id', 'bar');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Select classes="foo bar baz"/>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});
