import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import RadioGroupField from './RadioGroupField';
import { MockForm } from '../../../test/MockForm';
import CheckboxField from '../CheckboxField/CheckboxField';

const opts = ['one', 'two', 'three'];

test('Renders a radio group with multiple inputs', () => {
  const { container } = render(<MockForm><RadioGroupField name="foo" options={ opts }/></MockForm>);
  expect(container.getElementsByTagName('div')[0]).toHaveClass('form-group');
  expect(container.getElementsByTagName('input')).toHaveProperty('length', 3);
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><RadioGroupField label="foo" name="foo"
                                                                     options={ opts }/></MockForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(4);
});

test('Marks all radio inputs as required when specified', () => {
  const { container } = render(<MockForm><RadioGroupField required={ true } name="foo" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveAttribute('required');
  expect(inputs[1]).toHaveAttribute('required');
  expect(inputs[2]).toHaveAttribute('required');
});

test('Marks all radio inputs as disabled when specified', () => {
  const { container } = render(<MockForm><RadioGroupField disabled={ true } name="foo" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveAttribute('disabled');
  expect(inputs[1]).toHaveAttribute('disabled');
  expect(inputs[2]).toHaveAttribute('disabled');
});

test('Sets all radio inputs to the same name', () => {
  const { container } = render(<MockForm><RadioGroupField name="foo" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveAttribute('name', 'foo');
  expect(inputs[1]).toHaveAttribute('name', 'foo');
  expect(inputs[2]).toHaveAttribute('name', 'foo');
});

test('Sets ids for all radio inputs', () => {
  const { container } = render(<MockForm><RadioGroupField name="test" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveAttribute('id', 'radiogroup-test-one');
  expect(inputs[1]).toHaveAttribute('id', 'radiogroup-test-two');
  expect(inputs[2]).toHaveAttribute('id', 'radiogroup-test-three');
});

test('Changes input id for all radio inputs when specified', () => {
  const { container } = render(<MockForm><RadioGroupField name="test" id="whoathere" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveAttribute('id', 'whoathere-one');
  expect(inputs[1]).toHaveAttribute('id', 'whoathere-two');
  expect(inputs[2]).toHaveAttribute('id', 'whoathere-three');
});

test('Sets label "for" attribute for all labels for all radio inputs', () => {
  const { container } = render(<MockForm><RadioGroupField label="Foo" name="test" options={ opts }/></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels[1]).toHaveAttribute('for', 'radiogroup-test-one');
  expect(labels[2]).toHaveAttribute('for', 'radiogroup-test-two');
  expect(labels[3]).toHaveAttribute('for', 'radiogroup-test-three');
});

test('Omits group label element when not specified', () => {
  const { container } = render(<MockForm><RadioGroupField name="foo" options={ opts }/></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(3);
});

test('Adds a default class to each radio input', () => {
  const { container } = render(<MockForm><RadioGroupField name="foo" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveClass('form-check-input');
  expect(inputs[1]).toHaveClass('form-check-input');
  expect(inputs[2]).toHaveClass('form-check-input');
});

test('Adds custom classes to each radio input when specified', () => {
  const { container } = render(<MockForm><RadioGroupField classes="foo bar" name="foo" options={ opts }/></MockForm>);
  const inputs = container.getElementsByTagName('input');
  expect(inputs[0]).toHaveClass('foo bar');
  expect(inputs[1]).toHaveClass('foo bar');
  expect(inputs[2]).toHaveClass('foo bar');
});

test('Adds custom classes to the group label when specified', () => {
  const { container } = render(
    <MockForm><RadioGroupField label="Foo" name="foo" labelClasses="foo bar" options={ opts }/></MockForm>
  );
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Displays custom help when specified', () => {
  const { container } = render(
    <MockForm><RadioGroupField label="Foo" name="foo" help="foo bar" options={ opts }/></MockForm>
  );
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id', 'radiogroup-foo-help');
});

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(
    <MockForm><RadioGroupField label="Foo" name="foo" help="foo bar" options={ opts }/></MockForm>
  );
  const input = container.getElementsByTagName('input')[0];
  expect(input).toHaveAttribute('aria-describedby', 'radiogroup-foo-help');
});

// test('Validates correctly when required', async () => {
//   const { container, getByText } = render(<MockForm><RadioGroupField label="Foo" name="foo"
//                                                                      required={ true }/></MockForm>);
//   const input = container.getElementsByTagName('input')[0];
//
//   expect(input.checked).toEqual(false);
//
//   await act(async () => {
//     fireEvent.click(input);
//   });
//
//   expect(input.checked).toEqual(true);
//   expect(input).toHaveClass('form-check-input is-valid');
//
//   await act(async () => {
//     fireEvent.click(input);
//   });
//
//   expect(input.checked).toEqual(false);
//   expect(input).toHaveClass('form-check-input is-invalid');
//   expect(getByText('Required')).toBeTruthy();
// });

test('Fires custom onChange handler if specified', async () => {
  const mock = jest.fn();
  const { container } = render(<MockForm><RadioGroupField name="foo" onChange={ mock } options={ opts }/></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.click(input);
  });

  expect(mock).toBeCalled();
});

// test('Fires custom onBlur handler if specified', async () => {
//   const mock = jest.fn();
//   const { container } = render(<MockForm><RadioGroupField name="foo" onBlur={ mock } options={ opts }/></MockForm>);
//   const input = container.getElementsByTagName('input')[0];
//
//   await act(async () => {
//     fireEvent.blur(input);
//   });
//
//   expect(mock).toBeCalled();
// });