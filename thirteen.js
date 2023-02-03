// Ques:
// 13.What is Regex? Write a function that uses a regex in javascript to check if the
// input string is alphanumeric or not.

// Ans:
// A regular expression is a pattern of characters.
// The pattern is used to do pattern-matching "search-and-replace" functions on text.
// In JavaScript, regular expressions are also objects. 



const reg = /^[0-9a-zA-Z]+$/;            // regex expression to check string contains only alphabets and numbers

function isalphanumeric(str){
	console.log(reg.test(str));
}
isalphanumeric("string1234");

