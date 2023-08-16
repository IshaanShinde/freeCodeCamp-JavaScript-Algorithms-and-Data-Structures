function telephoneCheck(str){
  

    let regex_format = 
    
    /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
  
  
    return regex_format.test(str);
  
  }
  
  telephoneCheck("555-555-5555");