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

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Input required={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<Input disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Input disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Doesn\t set aria-disabled attribute when enabled', () => {
  const { container } = render(<Input />);
  expect(container.firstChild).not.toHaveAttribute('aria-disabled');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<Input placeholder={ 'foo' }/>);
  expect(container.firstChild).toHaveAttribute('placeholder', 'foo');
});

test('Sets input name when specified', () => {
  const { container } = render(<Input name={ 'foo' }/>);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Input classes="foo bar baz">Hello</Input>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});
