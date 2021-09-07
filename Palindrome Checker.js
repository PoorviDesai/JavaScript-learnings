function palindrome(str) {
  //var arr = [];
  str = str.toLowerCase();
  const regex = /[^a-z0-9]/g;
  str = str.replace(regex, "");

  for(let i=0;i<str.length/2;i++)
  {
    if(str[i] !== str[str.length - 1 - i])
    {
      return false;
    }
  }


  return true;
}



palindrome("eye");
