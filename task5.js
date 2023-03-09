function sortBy(arr, str = "Asc") {
    if (str === "Asc") {
      return arr.sort((a, b) => a - b);
    } else if (str === "Desc") {
      return arr.sort((a, b) => b - a);
    } else {
      return arr;
    }
  }
  
  console.log(sortBy([4, 3, 2, 1], "Asc"));