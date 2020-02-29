import alternatingCharacters from '../src/alternating-characters';

test('Takes 2 deletions to eliminate repeating characters AABAAB', () => {
  expect(alternatingCharacters('AABAAB')).toEqual(2);
});

test('Takes 3 deletions to eliminate repeating characters AAAA', () => {
  expect(alternatingCharacters('AAAA')).toEqual(3);
});

test('Takes 4 deletions to eliminate repeating characters BBBBB', () => {
  expect(alternatingCharacters('BBBBB')).toEqual(4);
});

test('Takes 0 deletions to eliminate repeating characters ABABABAB', () => {
  expect(alternatingCharacters('ABABABAB')).toEqual(0);
});

test('Takes 0 deletions to eliminate repeating characters in BABABA', () => {
  expect(alternatingCharacters('BABABA')).toEqual(0);
});
