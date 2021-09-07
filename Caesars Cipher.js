function rot13(str) {
  var res = "";
  var beforeRot =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
    var afterRot = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

for(let i=0;i<str.length;i++)
{
  for(let j=0;j<beforeRot.length;j++)
  {
    if(str[i] == beforeRot[j])
    {
      res += afterRot[j];
    }
  }
}
  return res;
}

rot13("SERR PBQR PNZC");
