import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';

test('Renders a text input', () => {
  const { container } = render(<TextInput />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<TextInput label="foo" />);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<TextInput required={ true } />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

test('Sets area-required attribute when required', () => {
  const { container } = render(<TextInput required={ true } />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('aria-required', 'true');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<TextInput disabled={ true } />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

test('Sets area-disabled attribute when disabled', () => {
  const { container } = render(<TextInput disabled={ true } />);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('aria-disabled', 'true');
});

test('Sets input placeholder when specified', () => {
  const { container } = render(<TextInput placeholder={ 'foo' }/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'foo');
});

test('Sets input id when specified', () => {
  const { container } = render(<TextInput id={ 'foo' }/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'foo');
});

test('Sets label "for" attribute when id specified', () => {
  const { container } = render(<TextInput label="Foo" id={ 'foo' }/>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<TextInput />);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});


test('Adds custom classes to the input when specified', () => {
  const { container } = render(<TextInput classes="foo bar baz">Hello</TextInput>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar baz');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<TextInput label="Foo" id={ 'foo' } labelClasses="foo bar baz" />);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar baz');
});
