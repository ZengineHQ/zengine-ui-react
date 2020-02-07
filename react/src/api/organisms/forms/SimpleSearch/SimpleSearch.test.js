import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import SimpleSearch from './SimpleSearch';

test('Renders a form', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  const form = container.getElementsByTagName('form')[0];
  expect(container.firstChild).toBe(form);
});

test('Form has a text input', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('type', 'text');
});

test('Form have an input label by default', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  expect(container.getElementsByTagName('label')[0]).toHaveTextContent('Search');
});

test('Form changes input label when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} labelInput="Foo"/>);
  expect(container.getElementsByTagName('label')[0]).toHaveTextContent('Foo');
});

test('Form has no submit button by default', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  expect(container.getElementsByTagName('button')).toHaveProperty('length', 0);
});

test('Form adds a submit button when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} showSubmit={ true }/>);
  expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Search');
});

test('Form changes submit button label when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} showSubmit={ true } labelSubmit="Foo"/>);
  expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Foo');
});

test('Form input has a placeholder by default', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'Type here...');
});

test('Form changes input placeholder when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} placeholder="Foo"/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'Foo');
});

test('Adds form classes when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} classes="foo bar" />);
  expect(container.firstChild).toHaveClass('foo bar');
});

test('Calls submit handler with proper value when submitted', async () => {
  const mock = jest.fn();
  const { container } = render(<SimpleSearch onSubmit={mock} />);
  const form = container.getElementsByTagName('form')[0];
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  await act(async () => {
    fireEvent.submit(form);
  });

  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0].search).toEqual('Testing');
});
