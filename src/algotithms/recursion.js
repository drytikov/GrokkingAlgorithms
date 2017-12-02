export const sum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sum(arr.slice(1));
};

export const countkeys = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  return 1 + countkeys(arr.slice(1));
};

let maxNumber;
export const getMaxNumber = (arr) => {
  if (arr.length === 0) {
    return maxNumber;
  }
  maxNumber = (maxNumber < arr[0] || maxNumber === undefined) ? arr[0] : maxNumber;
  return getMaxNumber(arr.slice(1));
};
