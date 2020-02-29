import makeAnagram from '../src/making-anagrams';

test('Takes 2 deletions to make an anagram', () => {
  expect(makeAnagram('cde', 'cdf')).toEqual(2);
});

test('Takes 4 deletions to make an anagram', () => {
  expect(makeAnagram('cde', 'abc')).toEqual(4);
});
