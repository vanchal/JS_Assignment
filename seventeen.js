// Ques:
// 17.Remove all the duplicate names objects from an array of objects. The object can
// contain name and age.
// [ { name: “Karl”, age:20}, { name: “Karl”, age:23}, { name:
// “Marry”, age:20}, { name: “Aston”, age:20} ]
// Output:
// [{ name: “Marry”, age:20}, { name: “Aston”, age:20} ]


var arr = [{name:"Karl", age:20},{name:"Karl",age:23},{name:"Marry",age:20},{name:"Aston",age:20}]
var newarr = []

for(ele of arr){
   if(newarr[ele.name]){
       newarr[ele.name]++;
   }
   else{
       newarr[ele.name] = 1
   }
}
console.log(newarr);

var uniquenames = arr.filter(({name,age},i)=>{
    return newarr[name] == 1;
})

console.log(uniquenames)