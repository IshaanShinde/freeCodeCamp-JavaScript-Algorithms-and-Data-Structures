function checkCashRegister(price, cash, cid){

  
    let temp_cash_in_drawer = 0;
  
    for(let element of cid){
      temp_cash_in_drawer += element[1] * 100;
    }
    
    let change = (cash * 100) - (price * 100);
  
    if(change > temp_cash_in_drawer){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else if(change == temp_cash_in_drawer){
      return {status: "CLOSED", change: cid};
    }
    else{
  
      let temp = [];
  
      cid = cid.reverse();
  
      let money = {
        "ONE HUNDRED": 10000,
        "TWENTY"     :  2000,
        "TEN"        :  1000,
        "FIVE"       :   500,
        "ONE"        :   100,
        "QUARTER"    :    25,
        "DIME"       :    10,
        "NICKEL"     :     5,
        "PENNY"      :     1
      };
  
      for(let element of cid){
        let temp_d = [element[0],0];
        element[1] = element[1]*100;
  
        while(change >= money[element[0]] && element[1] > 0){
          change -= money[element[0]];
          element[1] -= money[element[0]];
          temp_d[1] += money[element[0]]/100;
        }//end of while 
  
        if(temp_d[1] > 0){
          temp.push(temp_d);
        }
      }//end of for 
  
      if(change > 0){
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: temp};
  
    }//end of else statement
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);