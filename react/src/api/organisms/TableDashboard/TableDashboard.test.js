import React from 'react';
import { render } from '@testing-library/react';

import TableDashboard from './TableDashboard';
import { Button } from '../../index';

test('Renders a table HTML tag', () => {
  const { container } = render(<TableDashboard />);
  expect(container.getElementsByTagName('table')).toHaveProperty('length', 1);
});

test('Adds a default class to the table', () => {
  const { container } = render(<TableDashboard />);
  expect(container.firstChild).toHaveClass('table');
});

const headers = ['HeaderOne', 'HeaderTwo', 'HeaderThree'];

test('Generates correct table markup', () => {
  const { container } = render(<TableDashboard headers={headers} />);
  expect(container.getElementsByTagName('thead')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('tbody')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('tr')).toHaveProperty('length', 1);
  expect(container.getElementsByTagName('th')).toHaveProperty('length', 3);
});

test('Renders table headers', () => {
  const { container, getByText } = render(<TableDashboard headers={headers} />);
  expect(container.getElementsByTagName('th')).toHaveProperty('length', 3);
  expect(getByText('HeaderOne')).toBeTruthy();
  expect(getByText('HeaderTwo')).toBeTruthy();
  expect(getByText('HeaderThree')).toBeTruthy();
});

test('Renders table rows', () => {
  const rows = [['Column1', 'Column2', 'Column3'], ['Column4', 'Column5', 'Column6']];
  const { container, getByText } = render(<TableDashboard headers={headers} rows={rows} />);
  expect(container.getElementsByTagName('tr')).toHaveProperty('length', 3);
  expect(container.getElementsByTagName('td')).toHaveProperty('length', 6);
  expect(getByText('Column1')).toBeTruthy();
  expect(getByText('Column2')).toBeTruthy();
  expect(getByText('Column3')).toBeTruthy();
  expect(getByText('Column4')).toBeTruthy();
  expect(getByText('Column5')).toBeTruthy();
  expect(getByText('Column6')).toBeTruthy();
});

test('Renders React components in table columns', () => {
  const rows = [['Column1', <Button>ButtonComponent</Button>]];
  const { container, getByText } = render(<TableDashboard headers={headers} rows={rows} />);
  expect(container.getElementsByTagName('tr')).toHaveProperty('length', 2);
  expect(container.getElementsByTagName('td')).toHaveProperty('length', 2);
  expect(getByText('Column1')).toBeTruthy();
  expect(container.getElementsByTagName('button')).toHaveProperty('length', 1);
  expect(getByText('ButtonComponent')).toBeTruthy();
});
