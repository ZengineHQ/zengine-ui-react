import React from 'react';
import { render } from '@testing-library/react';

import { MockForm }  from '../../../test/MockForm';
import { Select } from './Select';

/**
 * Dummy options to be re-used across tests.
 */
const opts = ['one', 'two', 'three', 'four'];

test('Renders a select element', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('name', 'foo');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><Select name="foo" label="test" options={opts}/></MockForm>);
  expect(getByText('test')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks select as required when specified', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} required={true}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('required');
});

test('Sets aria-required attribute when required', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} required={true}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('aria-required', 'true');
});

test('Doesn\'t set aria-required attribute when not required', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} required={false}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).not.toHaveAttribute('aria-required');
});

test('Marks select as disabled when specified', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} disabled={true}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('disabled');
});

test('Sets aria-disabled attribute when disabled', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} disabled={true}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('aria-disabled', 'true');
});

test('Doesn\'t set aria-disabled attribute when not disabled', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} disabled={false}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).not.toHaveAttribute('aria-disabled');
});

test('Sets a default placeholder as the first option', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts}/></MockForm>);
  expect(container.getElementsByTagName('select')[0].firstChild).toHaveTextContent('-Select-');
});

test('Changes default placeholder when specified', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} placeholder="foo"/></MockForm>);
  expect(container.getElementsByTagName('select')[0].firstChild).toHaveTextContent('foo');
});

test('Sets select id same as name', () => {
  const { container } = render(<MockForm><Select name="foo" options={opts} /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('id', 'foo');
});

test('Changes select name when specified', () => {
  const { container } = render(<MockForm><Select options={opts} name="test" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('name', 'test');
});

test('Sets label "for" attribute when there\'s a label' , () => {
  const { container } = render(<MockForm><Select options={opts} label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><Select options={opts} name="foo"/></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<MockForm><Select options={opts} name="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the select when specified', () => {
  const { container } = render(<MockForm><Select options={opts} classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><Select options={opts} label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});
