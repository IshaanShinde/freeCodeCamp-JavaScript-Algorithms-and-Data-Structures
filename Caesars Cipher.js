function rot13(str) {

    let string_alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    let encoded_string = '';
  
    let temp_string = str;
    
    //just in case
    temp_string = temp_string.toUpperCase();
  
    for(let i=0; i < temp_string.length; ++i){
  
      if(string_alphabets.indexOf(temp_string[i]) >= 13){
        encoded_string += 
        string_alphabets[string_alphabets.indexOf(temp_string[i])-13];
      }
  
      else if(string_alphabets.indexOf(temp_string[i]) < 13 &&
              string_alphabets.indexOf(temp_string[i]) > -1){
                encoded_string +=
                string_alphabets[string_alphabets.indexOf(temp_string[i])+13];
      }
  
      else{
        //to pass on non alphabetic characters
        encoded_string += temp_string[i];
      }
  
    }
  
    return encoded_string;
    
  }//end of function
  
  rot13("SERR PBQR PNZC");