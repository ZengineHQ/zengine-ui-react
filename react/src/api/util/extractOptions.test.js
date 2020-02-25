import extractOptions from './extractOptions';

test('It correctly processes an array of options', () => {
  const data = ['optOne', 'optTwo', 'optThree'];
  expect(extractOptions(data)).toEqual([
    { key: 'optOne', val: 'optOne' },
    { key: 'optTwo', val: 'optTwo' },
    { key: 'optThree', val: 'optThree' }
  ])
});

test('It correctly processes an options object', () => {
  const data = { one: 'Option One', two: 'Option Two', three: 'Option Three' };
  expect(extractOptions(data)).toEqual([
    { key: 'one', val: 'Option One' },
    { key: 'two', val: 'Option Two' },
    { key: 'three', val: 'Option Three' }
  ])
});

test('it returns an empty array of invalid options supplied', () => {
  expect(extractOptions(false)).toEqual([]);
});
