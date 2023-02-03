// Ques:
// Array:
// 1) push
// 2) pop
// 3) shift
// 4) unshift
// 5) map
// 6) filter
// 7) splice
// 8) slice
// 9) sort
// 10)join


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.push(11)                    // push(add) to the end
arr.push(12)
console.log(arr)
// Output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
arr.pop()                      // remove from end
console.log(arr)
// Output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr.unshift(20)                 // add to beginning
arr.unshift(30)
console.log(arr)
// Output : [30,20,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
arr.shift()                    // remove from beginning
console.log(arr)
// Output : [20,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

var a_map = arr.map((item) => {                   // performs specified operation on every array element and returns new array
  return item * 2;
})
console.log(a_map)                                
// Output : [40, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]    

var a_filter = arr.filter((item) => {           // filters the array based on specified criteria and returns new array
  return !(item % 2);
})
console.log(a_filter)
// Output : [20, 2, 4, 6, 8, 10]
console.log(arr)
// Output : [20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

arr.sort((a, b) => {                          // sort using own comparator function
  const one = Number(a);
  const second = Number(b);
  if (one < second) {
    return -1;
  }
  if (one > second) {
    return 1;
  }
  return 0;
});

console.log(arr)
// Output : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20]


var arr_slice = arr.slice(2, 6)          //The slice() method returns a shallow copy of a portion of an array into a new array object selected from 
                                        // start to end (end not included) where start and end represent the index of items in that array. 
                                        // The original array will not be modified.
console.log(arr_slice)
// Output : [3, 4, 5, 6]

var arr_slice1 = arr.slice(-2)
console.log(arr_slice1)
// Output : [11, 20]


console.log(arr.join("-"))                    // The join() method creates and returns a new string by concatenating all of the elements in an array, 
 //Output: "1-2-3-4-5-6-7-8-9-10-11-20"                                       //separated by commas or a specified separator string.

console.log(arr) 
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 20]                       

arr.splice(2, 3, 300, 400, 500)            // The splice() method changes the contents of an array by removing or replacing                                            
console.log(arr)                           //  existing elements and/or adding new elements in place
//Output : [1, 2, 300, 400, 500, 6, 7, 8, 9, 10, 11, 20]
