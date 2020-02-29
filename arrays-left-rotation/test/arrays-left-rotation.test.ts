import rotLeft from '../src/arrays-left-rotation';

let startingArray;

beforeEach(() => {
  startingArray = [1, 2, 3, 4, 5];
});

test('Performs 1 left rotations', () => {
  const rotations = 1;
  expect(rotLeft(startingArray, rotations)).toEqual([2, 3, 4, 5, 1]);
});

test('Performs 2 left rotations', () => {
  const rotations = 2;
  expect(rotLeft(startingArray, rotations)).toEqual([3, 4, 5, 1, 2]);
});

test('Performs 3 left rotations', () => {
  const rotations = 3;
  expect(rotLeft(startingArray, rotations)).toEqual([4, 5, 1, 2, 3]);
});

test('Performs 4 left rotations', () => {
  const rotations = 4;
  expect(rotLeft(startingArray, rotations)).toEqual([5, 1, 2, 3, 4]);
});

test('Performs 10 left rotations', () => {
  startingArray = [
    41,
    73,
    89,
    7,
    10,
    1,
    59,
    58,
    84,
    77,
    77,
    97,
    58,
    1,
    86,
    58,
    26,
    10,
    86,
    51
  ];
  const rotations = 10;
  expect(rotLeft(startingArray, rotations)).toEqual([
    77,
    97,
    58,
    1,
    86,
    58,
    26,
    10,
    86,
    51,
    41,
    73,
    89,
    7,
    10,
    1,
    59,
    58,
    84,
    77
  ]);
});
