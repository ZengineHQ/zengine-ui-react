import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import YidhraForm from './Form';
import { NumberInput, TextInput } from '../../index';

test('Renders a form', () => {
  const { container } = render(<YidhraForm onSubmit={() => null}/>);
  const form = container.getElementsByTagName('form')[0];
  expect(container.firstChild).toBe(form);
});
