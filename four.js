// QUES:
// WAP to sort a string, considering the uppercase letters greater than the
// lowercase. Also remove all the spaces from the output.
// Danny is dancing → aacdDgiinnnnsy






var a = "Danny is dancing"
console.log(a.split("").sort((a,b)=>a.localeCompare(b)).join("").trim());
// Output : "aacdDgiinnnnsy"

