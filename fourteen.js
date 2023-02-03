// Ques:
// 14.Write a function that takes in an array of objects ({ name: “”, age: 2}) and
// returns the names of all the persons whose age is even.


var arr = [{name:"abc",age:20},{name:"xyz",age:17},{name:"efg",age:22},{name:"ijk",age:25}]
 
 var age_even = arr.filter(({name,age},i)=>{
    return !(age%2);
})
console.log(age_even);