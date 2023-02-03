// Ques:
// String:
// 1) toUpperCase
// 2) toLowerCase
// 3) includes
// 4) concat
// 5) indexOf
// 6) endsWith
// 7) startsWith
// 8) replace
// 9) replaceAll
// 10)substring
// 11)trim
// 12)slice
// 13)split
// 14)localeCompare


var a = "Hello, My name is marry";
var b = "Hey, what is your name";
console.log(a.toUpperCase());            // convert string to uppercase
//Output : "HELLO, MY NAME IS MARRY"              
console.log(a.toLowerCase());             // convert string to lowercase
//Output : "hello, my name is marry"
console.log(a.includes("name"));        // checks if string includes the specified 
//output : true
var c = a.concat('.',b);               // concatenate the strings
console.log(c);
//Output : "Hello, My name is marry.Hey, what is your name"
console.log(c.indexOf("name"));           // returns first index where match is found
//Output : 10
console.log(a.endsWith("marry"));        // checks if string ends with specified
// Output : true
console.log(b.endsWith("marry"));
//Output : false
console.log(a.startsWith("Hello"));       // checks if string starts with specified match
//Output : true
console.log(b.startsWith("wh",5));
//Output : true
console.log(a.replace("marry","mary"));     //replaces the match with given value
//Output : "Hello, My name is mary"
console.log(c.replaceAll("name","title"));        //replaces all matches with specified value
//Output : "Hello, My title is marry.Hey, what is your title"
var d = " Hii,  everyone. ";
console.log(d.trim());                         // trims starting and ending spaces
//Output : "Hii,  everyone."
console.log(b.split(' '));                       // The split() method takes a pattern and divides a String into an ordered list of substrings 
//Output : ["Hey,", "what", "is", "your", "name"]      by searching for the pattern, puts these substrings into an array, and returns the array.
console.log(a.localeCompare(b));
//Output : -1
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(4,15));                     //The slice() method extracts a section of a string and returns it as a new string, 
//Output : "quick brown"                            without modifying the original string.
console.log(str.substr(4,20));             //The substring() method returns the part of the string from the start index up to and excluding the end index.
//Output : "quick brown fox jump"
