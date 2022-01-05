module.exports = function reverse (n) {  
  let nAbsValue = Math.abs(n);                      // converted a number to an absolute value
  let nString = nAbsValue.toString();               // converted Number to String
  let nLength = nString.length - 1;                 // calculated the length of the String  
  let nReverse = "";                                // declared a variable nReverse to write the original number in reverse order and assigned a value
  for (nLength; nLength >= 0; nLength-- ) {         // loop initialization: starting from nLength and ending with 0    
    nReverse = nReverse + nString[nLength];         // add to the variable nReverse the value of the symbol of the variable nString located at the position nLength  
  }  
  let result = Number(nReverse);                    // converted String to Number
  console.log(result);
  return result;
}