import React from 'react';

import { isEmpty} from './validation';

test('Correctly determines whether an array is empty', () => {
  expect(isEmpty([])).toBe(true);
  expect(isEmpty([1])).toBe(false);
});

test('Correctly determines whether an object is empty', () => {
  expect(isEmpty({})).toBe(true);
  expect(isEmpty({a:1})).toBe(false);
});
