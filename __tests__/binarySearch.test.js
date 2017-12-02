import binarySearch from '../src/algotithms/binarySearch';

test('BinarySearch', () => {
  const data = [1, 3, 5, 7, 9];
  expect(binarySearch(data, 3)).toBe(1);
  expect(binarySearch(data, -1)).toBe(null);
});
