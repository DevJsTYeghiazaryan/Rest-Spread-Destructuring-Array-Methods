function parseInteger(arr) {
    return arr.map(str => {
      const parsed = parseInt(str);
    //   return isNaN(parsed) ? null : parsed;
    if(isNaN(parsed)){
        return null;
    }else{
        return parsed;
    }
    });
  }

  parseInteger(["1", "px", "2323"]);