import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { TextField, Form, NumberField } from '../../index';

test('Renders a form', () => {
  const { container } = render(<Form onSubmit={() => null}/>);
  const form = container.getElementsByTagName('form')[0];
  expect(container.firstChild).toBe(form);
});

test('Form has a submit button by default', () => {
  const { container } = render(<Form onSubmit={() => null}/>);
  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'submit');
  expect(button).toHaveTextContent('Save');
});

test('Form changes submit button label when specified', () => {
  const { container } = render(<Form onSubmit={() => null} labelSubmit="Foo"/>);
  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'submit');
  expect(button).toHaveTextContent('Foo');
});

test('Form has a reset button by default', async () => {
  const { container } = render(
    <Form onSubmit={() => null} showSubmit={false} showReset={ true }>
      <TextField label="Name" name="name" required/>
    </Form>
  );
  const input = container.getElementsByTagName('input')[0];

  // Add something to the input to make sure the reset button appears.
  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'reset');
  expect(button).toHaveTextContent('Reset');
});

test('Form changes reset button label when specified', async () => {
  const { container } = render(
    <Form onSubmit={() => null} showSubmit={false} showReset={ true } labelReset="Baz">
      <TextField label="Name" name="name" required/>
    </Form>
  );
  const input = container.getElementsByTagName('input')[0];

  // Add something to the input to make sure the reset button appears.
  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  const button = container.getElementsByTagName('button')[0];
  expect(button).toHaveAttribute('type', 'reset');
  expect(button).toHaveTextContent('Baz');
});

test('Form reset button doesn\'t appear when form is untouched', async () => {
  // Not really sure at all why but this one won't run unless wrapped.
  await act(async () => {
    const { container } = render(
      <Form onSubmit={() => null} showSubmit={ false } showReset={ true } >
        <TextField label="Name" name="name" required/>
      </Form>
    );

    const button = container.getElementsByTagName('button');
    expect(button).toHaveProperty('length', 0);
  });
});

test('Adds form classes when specified', () => {
  const { container } = render(<Form onSubmit={() => null} classes="foo bar" />);
  expect(container.firstChild).toHaveClass('foo bar');
});

test('Performs custom validation when specified', async () => {
  const mock = jest.fn();
  const { container } = render(<Form onSubmit={() => null} validate={mock} />);
  expect(mock).toBeCalled();
});

test('Calls submit handler with proper value when submitted', async () => {
  const mock = jest.fn();
  const { container } = render(
    <Form onSubmit={mock}>
      <TextField label="Name" name="name" required/>
      <NumberField label="Age" name="age" required/>
    </Form>
  );
  const form = container.getElementsByTagName('form')[0];
  const input = container.getElementsByTagName('input')[0];
  const otherInput = container.getElementsByTagName('input')[1];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Still testing',
      },
    });
    fireEvent.change(otherInput, {
      target: {
        value: 15,
      },
    });
  });

  await act(async () => {
    fireEvent.submit(form);
  });

  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0].name).toEqual('Still testing');
  expect(mock.mock.calls[0][0].age).toEqual(15);
});
