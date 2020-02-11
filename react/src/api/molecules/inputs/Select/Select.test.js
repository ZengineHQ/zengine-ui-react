import React from 'react';
import { render } from '@testing-library/react';

import { MockForm }  from '../../../../test/MockForm';
import { Select } from './Select';
import Input from '../../../atoms/Input/Input';

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
