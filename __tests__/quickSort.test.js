import quickSort from '../src/algotithms/quickSort';

test('QuickSort', () => {
  expect(quickSort([5, 3, 6, 3, 2, 10, 3, 2])).toEqual([2, 2, 3, 3, 3, 5, 6, 10]);
});
