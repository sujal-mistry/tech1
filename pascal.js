function pascals(num_row) {
  if (num_row === 0) return [[1]];

  let result = [[1]];

  for (let row = 1; row <= num_row; row++) {
    let arr = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        arr.push(1);
      } else {
        arr.push(result[row - 1][col - 1] + result[row - 1][col]);
      }
    }
    result.push(arr);
  }
  return result;
}
