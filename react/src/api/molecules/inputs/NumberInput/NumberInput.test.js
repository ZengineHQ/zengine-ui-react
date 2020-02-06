import React from 'react';
import { render } from '@testing-library/react';

import NumberInput from './NumberInput';
import TestForm from '../../../util/testing';

test('Renders a number input', () => {
  const { container } = render(<TestForm><NumberInput name="test"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'number');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<TestForm><NumberInput label="foo" name="foo"/></TestForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<TestForm><NumberInput required={ true } name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<TestForm><NumberInput required={ true } name="foo"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<TestForm><NumberInput name="foo" required={ false } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).not.toHaveAttribute('aria-required');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<TestForm><NumberInput disabled={ true } name="foo"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

test('Doesn\'t set aria-disabled attribute when not disabled', () => {
  const { container } = render(<TestForm><NumberInput name="foo" disabled={ false } /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).not.toHaveAttribute('aria-disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<TestForm><NumberInput disabled={ true } name="foo"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('aria-disabled', 'true');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<TestForm><NumberInput placeholder="foo" name="foo"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input name', () => {
  const { container } = render(<TestForm><NumberInput name="foo"/></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'foo');
});

test('Sets label "for" attribute when id specified', () => {
  const { container } = render(<TestForm><NumberInput label="Foo" name="foo" /></TestForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<TestForm><NumberInput name="foo"/></TestForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<TestForm><NumberInput name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<TestForm><NumberInput classes="foo bar" name="foo" /></TestForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<TestForm><NumberInput label="Foo" name="foo" labelClasses="foo bar" /></TestForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});
