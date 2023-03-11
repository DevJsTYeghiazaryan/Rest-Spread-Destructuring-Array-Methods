function parseInteger(arr) {
    return arr.map(str => {
      const parsed = parseInt(str)
      if (isNaN(parsed)) {
        return null;
      } else {
        return parsed;
      }
  
    })
  }
  
  
  console.log(parseInteger(["1", 7, "2323"]))