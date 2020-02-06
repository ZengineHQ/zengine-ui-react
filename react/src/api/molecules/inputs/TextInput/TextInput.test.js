import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';
import TestForm from '../../../util/testing';
import Input from '../../../atoms/Input/Input';

test('Renders a text input', () => {
  const { container } = render(<TestForm><TextInput name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<TestForm><TextInput label="foo" name="foo" /></TestForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<TestForm><TextInput name="foo" required={ true } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<TestForm><TextInput name="foo" required={ true } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<TestForm><TextInput name="foo" required={ false } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).not.toHaveAttribute('aria-required');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<TestForm><TextInput name="foo" disabled={ true } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<TestForm><TextInput name="foo" disabled={ true } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('aria-disabled', 'true');
});

test('Doesn\'t set aria-disabled attribute when not disabled', () => {
  const { container } = render(<TestForm><TextInput name="foo" disabled={ false } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).not.toHaveAttribute('aria-disabled');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<TestForm><TextInput name="foo" placeholder="foo"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input id when specified', () => {
  const { container } = render(<TestForm><TextInput name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'foo');
});

test('Sets label "for" attribute when id specified', () => {
  const { container } = render(<TestForm><TextInput label="Foo" name="foo" /></TestForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<TestForm><TextInput name="foo" /></TestForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<TestForm><TextInput name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<TestForm><TextInput classes="foo bar" name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<TestForm><TextInput label="Foo" name="foo" labelClasses="foo bar" /></TestForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});
