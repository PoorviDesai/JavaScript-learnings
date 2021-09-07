const checkCashRegister = (price, cash, cid) => {
  const currUnits = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  let cidSum = 0;
  for (let unit of cid) {
    cidSum += unit[1];
  }
  cidSum = cidSum.toFixed(2);
  let changeNeed = cash - price;
  const changeArr = [];
  if (changeNeed > cidSum) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArr };
  } else if (changeNeed.toFixed(2) === cidSum) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    
   for (let unit of cid)  {
      let curr = [unit[0], 0];
      // let curr = unit[0];
      // let currval = unit[1];
      //cannot do the above as we have to return a 2d arry for change..
      let amount = 0;

      while(changeNeed >= currUnits[unit[0]] &&  unit[1]> 0)
      {
       curr[1] += currUnits[unit[0]];
       unit[1] -= currUnits[unit[0]];
       changeNeed -= currUnits[unit[0]];
       changeNeed = changeNeed.toFixed(2); 
      }
    

      if (curr[1] > 0) {
        changeArr.push(curr);
      }
   }
  }
  
  if (changeNeed > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: changeArr};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
