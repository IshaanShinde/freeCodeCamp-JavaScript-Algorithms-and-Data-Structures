function convertToRoman(num) {
 

    let roman_arabic_numeral_values = {
  
         M :  1000,
        CM :   900,
         D :   500,
        CD :   400,
         C :   100,
        XC :    90,
         L :    50,
        XL :    40,
         X :    10,
        IX :     9,
         V :     5,
        IV :     4,
         I :     1
  
    }
  
    let roman_numeral = '';
  
    for(let property in roman_arabic_numeral_values){
      while(num >= roman_arabic_numeral_values[property]){
        //assigning the appropriate property
        roman_numeral += property;
        //removing the value of the property from the number given
        num -= roman_arabic_numeral_values[property];
      }
    }
   
    return roman_numeral;
  
  
  }
  
  convertToRoman(36);