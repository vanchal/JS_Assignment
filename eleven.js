// Ques:
// Create a calculator that supports +, -, * and /. The calculator should take a string
// expression as an input. The string can
// Example:
// “2*2” → 4
// “8-8” → 0
// “9+9” → 18
// “a*a” → invalid
// “2” → invalid
// “9/2” → 2.5
// Also, display “invalid” in case the input string is not valid.
// The input string is considered as valid, if it has two numeric characters and an
// operator out of (+, - , /, *)
// Also handle, if there is any extra space




var str = prompt("input string");                      // input string
if(str.match(/^\d+\+\d+$/)){
    var inp = str.split("+");
    var [a,b] = inp;
    console.log (Number(a)+Number(b));                 // addition of number
}
else if(str.match(/^\d+\-\d+$/)){
    var inp = str.split("-");
    var [a,b] = inp;
    console.log (Number(a)-Number(b));                 // sub of numbers
}
else if(str.match(/^\d+\*\d+$/)){                       
    var inp = str.split("*");
    var [a,b] = inp;
    console.log (Number(a)*Number(b));                  // mul of numbers
}
else if(str.match(/^\d+\/\d+$/)){
    var inp = str.split("/");
    var [a,b] = inp;
    if(b == 0)console.log("invalid string");           // check if divisor is 0 then invalid string
    else{
    console.log (Number(a)/Number(b));                 // div  of numbers
    }
}
else{
    console.log("invalid string ");                    // if invalid string
}

