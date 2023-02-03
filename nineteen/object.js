// Ques:
// Object:
// 1) keys
// 2) values
// 3) assign
// 4) hasOwnProperty


var obj = {                                              // source object
    fname : "Karl",
    lname : "Aston",
    age : 20 ,
    friends : ["Marry","Robert"]
}

var target = {
 age : 22,                                               // target object
 height : "5feet"
}

console.log(Object.keys(obj))
//Output: ["fname", "lname", "age", "friends"]
console.log(Object.values(obj))
//Output: ["Karl", "Aston", 20, ["Marry", "Robert"]]
Object.assign(target,obj)
console.log(target)
// Output: {
//   age: 20,
//   fname: "Karl",
//   friends: ["Marry", "Robert"],
//   height: "5feet",
//   lname: "Aston"
// }
console.log(obj.hasOwnProperty("tostring"))
// Output: false
console.log(obj.hasOwnProperty("age"))
// Output : true

