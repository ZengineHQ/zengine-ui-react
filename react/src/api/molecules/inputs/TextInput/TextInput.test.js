import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';
import { MockForm }  from '../../../../../test/MockForm';

test('Renders a text input', () => {
  const { container } = render(<MockForm><TextInput name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><TextInput label="foo" name="foo" /></MockForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<MockForm><TextInput name="foo" required={ true } /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Marks input as disabled when specified', () => {
  const { container } = render(<MockForm><TextInput name="foo" disabled={ true } /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Sets input placeholder when specified', () => {
  const { container } = render(<MockForm><TextInput name="foo" placeholder="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input id when specified', () => {
  const { container } = render(<MockForm><TextInput name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'foo');
});

test('Sets label "for" attribute when id specified', () => {
  const { container } = render(<MockForm><TextInput label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><TextInput name="foo" /></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<MockForm><TextInput name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<MockForm><TextInput classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><TextInput label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});
