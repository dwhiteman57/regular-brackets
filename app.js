const regularBrackets = (str) => {
    let count = 0;
    for(let i=0; i<str.length; i++) {
      str[i] === '(' ? (count += 1) : (count -= 1);
      if (count === -1) return false;
    }
    return count === 0 ? true : false;
  }
  
  console.log(regularBrackets('(())'));
  console.log(regularBrackets(')('));