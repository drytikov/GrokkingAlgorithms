const binarySearch = (list, key) => {
  const iter = (low, high) => {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess === key) {
      return mid;
    }
    if (low > high) {
      return null;
    }
    return (guess > key) ? iter(low, mid - 1) : iter(mid + 1, high);
  };
  return iter(0, list.length - 1);
};

export default binarySearch;
