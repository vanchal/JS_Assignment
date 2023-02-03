// Ques:
// 16.Convert the code to Promises, where each function should return a promise. And
// implement the promise chaining.
// And after execution of all the promises, either rejected or fulfilled, make it

// const f1 = (cb) => {
//   cb("From F1");
// };
// const f2 = (cb) => {
//   cb("From F2");
// };
// const f3 = (cb) => {
//   cb("From F3");
// };
// const f4 = (cb) => {
//   cb("From F4");
// };
// f1(function (data, err) {
//   console.log(data);
//   f2(function (data) {
//     console.log(data);
//     f3(function (data) {
//       console.log(data);
//       f4(function (data) {
//         console.log(data);
//       });
//     });
//   });
// });



function f1() {
    const promise = new Promise((resolve, reject) => {
      resolve("From F1");
    });
    return promise;
  }
  function f2() {
    const promise = new Promise((resolve, reject) => {
      resolve("From F2");
    });
    return promise;
  }
  function f3() {
    const promise = new Promise((resolve, reject) => {
      resolve("From F3");
    });
    return promise;
  }
  function f4() {
    const promise = new Promise((resolve, reject) => {
      resolve("From F4");
    });
    return promise;
  }
  f1()
    .then((data) => {
      console.log(data);
      return f2();
    })
    .then((data) => {
      console.log(data);
      return f3();
    })
    .then((data) => {
      console.log(data);
      return f4();
    })
    .then((data) => {
      console.log(data);
    }).catch((err)=>{
       console.log("error");
    });