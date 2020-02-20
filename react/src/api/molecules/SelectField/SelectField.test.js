import React from 'react';
import { render } from '@testing-library/react';

import { MockForm }  from '../../../test/MockForm';
import { SelectField } from './SelectField';

/**
 * Dummy options to be re-used across tests.
 */
const opts = ['one', 'two', 'three', 'four'];

test('Renders a select element', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('name', 'foo');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><SelectField name="foo" label="test" options={opts}/></MockForm>);
  expect(getByText('test')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks select as required when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} required={true}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Select" atom component which actually gets rendered.

test('Marks select as disabled when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} disabled={true}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Select" atom component which actually gets rendered.

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(<MockForm><SelectField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const select = container.getElementsByTagName('select')[0];
  expect(select).toHaveAttribute('aria-describedby', 'select-foo-help');
});

test('Sets a default placeholder as the first option', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts}/></MockForm>);
  expect(container.getElementsByTagName('select')[0].firstChild).toHaveTextContent('-Select-');
});

test('Changes default placeholder when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} placeholder="foo"/></MockForm>);
  expect(container.getElementsByTagName('select')[0].firstChild).toHaveTextContent('foo');
});

test('Sets select id automatically', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts}/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('id', 'select-foo');
});

test('Changes select name when specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} name="test" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('name', 'test');
});

test('Changes select id when specified', () => {
  const { container } = render(<MockForm><SelectField name="foo" options={opts} id="whoathere"/></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label' , () => {
  const { container } = render(<MockForm><SelectField options={opts} label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'select-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} name="foo"/></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the select', () => {
  const { container } = render(<MockForm><SelectField options={opts} name="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the select when specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('select')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><SelectField options={opts} label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});
