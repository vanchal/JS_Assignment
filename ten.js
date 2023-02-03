// Ques:
// 10.Create a timer in javascript, in such a way, that it should display 0-10 seconds,
// and after displaying 10, the program should exit.



let counter = 1;
const intervalId = setInterval(() => {
  console.log(`${counter} seconds`);
  counter += 1;
if (counter === 11) {
    clearInterval(intervalId);
  }
},1000);


// Implements a timer which works for 10 seconds 