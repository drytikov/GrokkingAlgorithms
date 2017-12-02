const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[0];
  const keysAreLessPivot = array.slice(1).filter(key => key <= pivot);
  const keysAreMorePivot = array.slice(1).filter(key => key > pivot);
  return [...quickSort(keysAreLessPivot), pivot, ...quickSort(keysAreMorePivot)];
};

export default quickSort;
