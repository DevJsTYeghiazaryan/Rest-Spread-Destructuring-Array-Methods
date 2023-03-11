function slice(array, startIndex, endIndex) {
    let slicedArr = [];
    for (let i = startIndex; i < endIndex || i > array.length; i++) {
      slicedArr.push(array[i]);
    }
    return slicedArr;
  }
  
  let arr = [55, 77, 98, 56, 83, 78];
  
  console.log(slice(arr, 1, 4))