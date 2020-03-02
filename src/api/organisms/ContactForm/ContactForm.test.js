import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import ContactForm from './ContactForm';

test('Renders a form', () => {
  const { container } = render(<ContactForm onSubmit={ () => null }/>);
  const form = container.getElementsByTagName('form')[0];
  expect(container.firstChild).toBe(form);
});

test('Form has a text input', () => {
  const { container } = render(<ContactForm onSubmit={ () => null }/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Form have an input label by default', () => {
  const { container } = render(<ContactForm onSubmit={ () => null }/>);
  expect(container.getElementsByTagName('label')[0]).toHaveTextContent('Name');
});

test('Form changes submit button label when specified', () => {
  const { container } = render(<ContactForm onSubmit={ () => null } labelSubmit="Foo"/>);
  expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Foo');
});

test('Form has no reset button', async () => {
  const { container } = render(<ContactForm onSubmit={ () => null }/>);
  const input = container.getElementsByTagName('input')[0];

  // Add something to the input to trigger reset button if it exists.
  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  expect(container.getElementsByTagName('button')).toHaveProperty('length', 1);
});

test('Adds form classes when specified', () => {
  const { container } = render(<ContactForm onSubmit={ () => null } classes="foo bar"/>);
  expect(container.firstChild).toHaveClass('foo bar');
});

test('Calls submit handler with proper value when submitted', async () => {
  const mock = jest.fn();
  const { container } = render(<ContactForm onSubmit={ mock }/>);
  const form = container.getElementsByTagName('form')[0];
  const inputs = container.getElementsByTagName('input');

  await act(async () => {
    fireEvent.change(inputs[0], {
      target: {
        value: 'John Doe',
      },
    });
    fireEvent.change(inputs[1], {
      target: {
        value: 'john@doe.net',
      },
    });
  });

  await act(async () => {
    fireEvent.submit(form);
  });

  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0].name).toEqual('John Doe');
  expect(mock.mock.calls[0][0].email).toEqual('john@doe.net');
});
