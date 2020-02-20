import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import NumberField from './NumberField';
import { MockForm } from '../../../test/MockForm';
import { act } from 'react-dom/test-utils';

test('Renders a number input', () => {
  const { container } = render(<MockForm><NumberField name="test"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'number');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><NumberField label="foo" name="foo"/></MockForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<MockForm><NumberField required={ true } name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Marks input as disabled when specified', () => {
  const { container } = render(<MockForm><NumberField disabled={ true } name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Sets input placeholder when specified', () => {
  const { container } = render(<MockForm><NumberField placeholder="foo" name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input id automatically', () => {
  const { container } = render(<MockForm><NumberField name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'number-foo');
});

test('Changes input name when specified', () => {
  const { container } = render(<MockForm><NumberField name="test"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('name', 'test');
});

test('Changes input id when specified', () => {
  const { container } = render(<MockForm><NumberField name="test" id="whoathere"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label', () => {
  const { container } = render(<MockForm><NumberField label="Foo" name="foo"/></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'number-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><NumberField name="foo"/></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<MockForm><NumberField name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<MockForm><NumberField classes="foo bar" name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><NumberField label="Foo" name="foo" labelClasses="foo bar"/></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Displays custom help when specified', () => {
  const { container } = render(<MockForm><NumberField label="Foo" name="foo" help="foo bar"/></MockForm>);
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id', 'number-foo-help');
});

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(<MockForm><NumberField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const input = container.getElementsByTagName('input')[0];
  expect(input).toHaveAttribute('aria-describedby', 'number-foo-help');
});

test('Validates correctly when required', async () => {
  const { container } = render(<MockForm><NumberField name="foo" required={ true }/></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  expect(input.value).toEqual('');

  // Having these calls in separate act() blocks was the only way to get it working consistently.
  await act(async () => {
    fireEvent.change(input, { target: { value: 123 } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('123');
  expect(input).toHaveClass('form-control is-valid');

  // Having these calls in separate act() blocks was the only way to get it working consistently.
  await act(async () => {
    fireEvent.change(input, { target: { value: null } });
  });
  await act(async () => {
    fireEvent.blur(input);
  });

  expect(input.value).toEqual('');
  expect(input).toHaveClass('form-control is-invalid');
});
