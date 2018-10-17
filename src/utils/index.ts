export const mergeTwoArrays = (array1: any, array2: any) => [].concat.apply(array1, array2);

export const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
