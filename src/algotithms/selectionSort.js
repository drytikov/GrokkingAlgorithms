// Finds the smallest value in an array
const findSmallest = (arr) => {
  const iter = (index, smallest, smallestIndex) => {
    if (index === arr.length) {
      return smallestIndex;
    }
    return (arr[index] < smallest) ? iter(index + 1, arr[index], index)
      : iter(index + 1, smallest, smallestIndex);
  };
  return iter(0, arr[0], 0);
};
// Sort array
const selectionSort = (arr) => {
  const iter = (curArr, acc) => {
    if (curArr.length === 0) {
      return acc;
    }
    const smallest = findSmallest(curArr);
    const newAcc = [...acc, ...curArr.splice(smallest, 1)];
    return iter(curArr, newAcc);
  };
  return iter(arr, []);
};

export default selectionSort;
