import { sum, countkeys, getMaxNumber } from '../src/algotithms/recursion';

const data = [1, 3, 5, 7, 9];

test('Sum', () => {
  expect(sum(data)).toBe(25);
});

test('Countkeys', () => {
  expect(countkeys(data)).toBe(5);
});

test('getMaxNumber', () => {
  expect(getMaxNumber(data)).toBe(9);
});
