function palindrome(str) {

    //making sure the string is lower case
    //and consists of alphanumeric characters only 
    let str_alphanumeric_characters = str.toLowerCase().match(/[a-z0-9]/ig);
  
    if(str_alphanumeric_characters.join('') == 
       str_alphanumeric_characters.reverse().join('')){
      
        return true;
    }
  
    else{
      return false;
    }
  
  }//end of function
  
  palindrome("eye");