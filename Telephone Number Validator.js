function telephoneCheck(str) {
    var regex = /-| /g;
    let newStr = str.replace(regex, "");
    var re = /^(\d | '(' | ')')/g;

    let fin = newStr.replace(re, "");
    var n = fin.length;

    if(n===10)
    {
      if(str[str.length - 2] === '-')
      {
        return false;
      }
      
      return true;
    }
    else if(n===11 && fin[0] === '1')
    {
      return true;
    }
    else if(n===12 && fin.indexOf('(') === 0 && fin.indexOf(')') === 4)
    {
      return true;
    }
    else if(n === 13 && fin[0] === '1' && fin.indexOf('(') === 1 && fin.indexOf(')') === 5 && str[0] !== '-')
    {
      return true;
    }

   
  return false;
   
}

telephoneCheck("555-555-5555");
