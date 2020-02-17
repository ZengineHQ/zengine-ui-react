import React from 'react';
import { render } from '@testing-library/react';

import Input from './Input';

test('Renders a input HTML tag', () => {
  const { container } = render(<Input />);
  expect(container.getElementsByTagName('input')).toHaveProperty('length', 1);
});

test('Renders a type text input by default', () => {
  const { container } = render(<Input/>);
  expect(container.firstChild).toHaveAttribute('type', 'text');
});

test('Renders correct input type when specified', () => {
  const { container } = render(<Input type="number"/>);
  expect(container.firstChild).toHaveAttribute('type', 'number');
});

test('Marks input as required when specified', () => {
  const { container } = render(<Input required={ true }/>);
  expect(container.firstChild).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Input required={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<Input required={ false }/>);
  expect(container.firstChild).not.toHaveAttribute('aria-required');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<Input disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Input disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<Input placeholder="foo"/>);
  expect(container.firstChild).toHaveAttribute('placeholder', 'foo');
});

test('Sets input name when specified', () => {
  const { container } = render(<Input name="foo"/>);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Input classes="foo bar baz"/>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});
