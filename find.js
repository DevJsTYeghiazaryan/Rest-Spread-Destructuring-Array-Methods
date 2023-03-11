function find(arr, Element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= Element) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  const arr = [1, 2, 3, 4, 5];
  console.log(find(arr, 8)); 