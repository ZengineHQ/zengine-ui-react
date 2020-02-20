import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import CheckboxField from './CheckboxField';
import { MockForm }  from '../../../test/MockForm';

test('Renders a checkbox input', () => {
  const { container } = render(<MockForm><CheckboxField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'checkbox');
});

test('Sets label when specified', () => {
  const { container, getByText } = render(<MockForm><CheckboxField label="foo" name="foo"/></MockForm>);
  expect(getByText('foo')).toBeTruthy();

  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(1);
});

test('Marks input as required when specified', () => {
  const { container } = render(<MockForm><CheckboxField required={ true } name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('required');
});

test('Marks input as disabled when specified', () => {
  const { container } = render(<MockForm><CheckboxField disabled={ true } name="foo"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('disabled');
});

test('Sets input id automatically', () => {
  const { container } = render(<MockForm><CheckboxField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'checkbox-foo');
});

test('Changes input name when specified', () => {
  const { container } = render(<MockForm><CheckboxField name="test" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('name', 'test');
});

test('Changes input id when specified', () => {
  const { container } = render(<MockForm><CheckboxField name="test" id="whoathere"/></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('id', 'whoathere');
});

test('Sets label "for" attribute when there\'s a label' , () => {
  const { container } = render(<MockForm><CheckboxField label="Foo" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveAttribute('for', 'checkbox-foo');
});

test('Omits label element when not specified', () => {
  const { container } = render(<MockForm><CheckboxField name="foo"/></MockForm>);
  const labels = container.getElementsByTagName('label');
  expect(labels.length).toEqual(0);
});

test('Adds a default class to the input', () => {
  const { container } = render(<MockForm><CheckboxField name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('form-check-input');
});

test('Adds custom classes to the input when specified', () => {
  const { container } = render(<MockForm><CheckboxField classes="foo bar" name="foo" /></MockForm>);
  expect(container.getElementsByTagName('input')[0]).toHaveClass('foo bar');
});

test('Adds custom classes to the label when specified', () => {
  const { container } = render(<MockForm><CheckboxField label="Foo" name="foo" labelClasses="foo bar" /></MockForm>);
  expect(container.getElementsByTagName('label')[0]).toHaveClass('foo bar');
});

test('Displays custom help when specified', () => {
  const { container } = render(<MockForm><CheckboxField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const help = container.getElementsByTagName('small')[0];
  expect(help).toBeTruthy();
  expect(help).toHaveTextContent('foo bar');
  expect(help).toHaveAttribute('id','checkbox-foo-help');
});

test('Set aria-describedby attribute when help is specified', () => {
  const { container } = render(<MockForm><CheckboxField label="Foo" name="foo" help="foo bar" /></MockForm>);
  const input = container.getElementsByTagName('input')[0];
  expect(input).toHaveAttribute('aria-describedby', 'checkbox-foo-help');
});

test('Validates correctly when required', async () => {
  const { container } = render(<MockForm><CheckboxField label="Foo" name="foo" required={true} /></MockForm>);
  const input = container.getElementsByTagName('input')[0];

  expect(input.checked).toEqual(false);

  await act(async () => {
    fireEvent.click(input);
  });

  expect(input.checked).toEqual(true);
  expect(input).toHaveClass('form-check-input is-valid');

  await act(async () => {
    fireEvent.click(input);
  });

  expect(input.checked).toEqual(false);
  expect(input).toHaveClass('form-check-input is-invalid');
});
