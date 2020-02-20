import formatPlural from './formatPlural';

test('Formats regular singular words', () => {
  expect(formatPlural(1, 'dog')).toBe('dog');
});

test('Formats regular plural words', () => {
  expect(formatPlural(2, 'dog')).toBe('dogs');
});

test('Formats plural words with a custom suffix', () => {
  expect(formatPlural(2, 'fox', 'es')).toBe('foxes');
});

// Deal with it! :)
test('Completely butchers words that don\'t have an alternative plural form', () => {
  expect(formatPlural(2, 'mouse')).not.toBe('mice');
  expect(formatPlural(2, 'mouse')).toBe('mouses');
});
