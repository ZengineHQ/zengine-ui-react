import React from 'react';
import { render } from '@testing-library/react';

import Textarea from './Textarea';

test('Renders a textarea HTML tag', () => {
  const { container } = render(<Textarea/>);
  expect(container.getElementsByTagName('textarea')).toHaveProperty('length', 1);
});

test('Marks textarea as required when specified', () => {
  const { container } = render(<Textarea required={ true }/>);
  expect(container.firstChild).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<Textarea required={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<Textarea required={ false }/>);
  expect(container.firstChild).not.toHaveAttribute('aria-required');
});

test('Marks textarea as disabled when specified', () => {
  const { container } = render(<Textarea disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<Textarea disabled={ true }/>);
  expect(container.firstChild).toHaveAttribute('aria-disabled', 'true');
});

test('Sets textarea placeholder when specified', () => {
  const { container } = render(<Textarea placeholder="foo"/>);
  expect(container.firstChild).toHaveAttribute('placeholder', 'foo');
});

test('Sets textarea name when specified', () => {
  const { container } = render(<Textarea name="foo"/>);
  expect(container.firstChild).toHaveAttribute('name', 'foo');
});

test('Sets textarea id when specified', () => {
  const { container } = render(<Textarea name="foo" id="bar"/>);
  expect(container.firstChild).toHaveAttribute('id', 'bar');
});

test('Adds custom classes when specified', () => {
  const { container } = render(<Textarea classes="foo bar baz"/>);
  expect(container.firstChild).toHaveClass('foo bar baz');
});

test('Allows textarea resizing by default', () => {
  const { container } = render(<Textarea/>);
  expect(container.firstChild).not.toHaveStyle('resize: none');
});

test('Disables textarea resizing when specified', () => {
  const { container } = render(<Textarea resizable={ false }/>);
  expect(container.firstChild).toHaveStyle('resize: none');
});
