function sumNumbers8(arr) {
    return arr.reduce((acc, curr) => curr >= 18 ? acc + curr : acc, 0);
  }
  
  const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
  
  console.log(sumNumbers(arr));