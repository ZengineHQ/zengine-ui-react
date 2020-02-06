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

test('Form have a button label by default', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Search');
});

test('Form changes button label when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} labelSubmit="Foo"/>);
  expect(container.getElementsByTagName('button')[0]).toHaveTextContent('Foo');
});

test('Form have a placeholder by default', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null}/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'Type here...');
});

test('Form changes input placeholder when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} placeholder="Foo"/>);
  expect(container.getElementsByTagName('input')[0]).toHaveAttribute('placeholder', 'Foo');
});

test('Adds classes when specified', () => {
  const { container } = render(<SimpleSearch onSubmit={() => null} classes="foo bar" />);
  expect(container.firstChild).toHaveClass('foo bar');
});

test('Calls submit handler with proper value when submitted', async () => {
  const mock = jest.fn();
  const { container } = render(<SimpleSearch onSubmit={mock} />);
  const button = container.getElementsByTagName('button')[0];
  const input = container.getElementsByTagName('input')[0];

  await act(async () => {
    fireEvent.change(input, {
      target: {
        value: 'Testing',
      },
    });
  });

  await act(async () => {
    fireEvent.click(button);
  });

  expect(mock).toBeCalled();
  expect(mock.mock.calls[0][0].search).toEqual('Testing');
});
