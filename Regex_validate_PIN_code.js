"use strict"
// 7 kyu
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false
*/


function validatePIN(pin) {
    return /^\d{4}$|^\d{6}$/.test(pin) //?
}


validatePIN("1234") //?

//   "should return False for pins with length other than 4 or 6"
validatePIN("1")     //?   
//false, "Wrong output for '1'")   
validatePIN("12")     //?   
//false, "Wrong output for '12'")  
validatePIN("123")     //?  
//false, "Wrong output for '123'")  
validatePIN("12345")    //?    
//false, "Wrong output for '12345'")  
validatePIN("1234567")   //?    
//false, "Wrong output for '1234567'")  
validatePIN("-1234")     //?   
//false, "Wrong output for '-1234'")  
validatePIN("1.234")     //?   
//false, "Wrong output for '1.234'")  
validatePIN("-1.234")    //?   
//false, "Wrong output for '-1.234'")  
validatePIN("00000000")   //?   
//false, "Wrong output for '00000000'")  


//  "should return False for pins which contain characters other than digits"
validatePIN("a234")  //? 
//false, "Wrong output for 'a234'")  
validatePIN(".234")  //? 
// false, "Wrong output for '.234'")



