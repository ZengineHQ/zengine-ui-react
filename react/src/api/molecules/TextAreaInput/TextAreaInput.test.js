import React from 'react';
import { render } from '@testing-library/react';

import TextAreaInput from './TextAreaInput';
import { MockForm }  from '../../../test/MockForm';

test('Renders a textarea', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toBeTruthy();
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><TextAreaInput label="foo" name="foo" /></MockForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks textarea as required when specified', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" required={ true } /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveAttribute('required');
});

// Testing for aria-required attribute not necessary here because if it's marked as required the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Marks textarea as disabled when specified', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" disabled={ true } /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveAttribute('disabled');
});

// Testing for aria-disabled attribute not necessary here because if it's marked as disabled the presence of the
// aria-attribute will be tested by the "Input" component which actually gets rendered.

test('Sets textarea placeholder when specified', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" placeholder="foo"/></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets textarea id automatically', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveAttribute('id', 'textarea-foo');
});

test('Changes textarea name when specified', () => {
  const { container } = render(<MockForm><TextAreaInput name="test" /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveAttribute('name', 'test');
});

test('Changes textarea id when specified', () => {
  const { container } = render(<MockForm><TextAreaInput name="test" id="whoathere"/></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label' , () => {
  const { container } = render(<MockForm><TextAreaInput label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'textarea-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" /></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the textarea', () => {
  const { container } = render(<MockForm><TextAreaInput name="foo" /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveClass('form-control');
});

test('Adds custom classes to the textarea when specified', () => {
  const { container } = render(<MockForm><TextAreaInput classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('textarea')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><TextAreaInput label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Displays custom help when specified', () => {
  const { container } = render(<MockForm><TextAreaInput label="Foo" name="foo" help="foo bar" /></MockForm>);
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id','textarea-foo-help');
});
