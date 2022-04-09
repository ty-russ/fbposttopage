function Add() {
  const answer = 2;
  console.log(answer);
}
Add();

// var temp = "hi";
// function display() {
//   var temp;
//   console.log(temp);
//   temp = "bye";
// }
// display();

// function balancedParentheses(str) {
//   let stack = [];
//   let map = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   for (let i = 0; i < str.length; i++) {
//     // If character is an opening brace add it to a stack
//     if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
//       stack.push(str[i]);
//     }
//     //if closing brace, pop from stack
//     else {
//       let lastEle = stack.pop();
//       //Return false if the element popped doesn’t match the corresponding closing brace in the map
//       if (str[i] !== map[lastEle]) {
//         return false;
//       }
//     }
//   }
//   //if stack not empty at end, return false
//   if (stack.length !== 0) {
//     return false;
//   }

//   return true;
// }
// //console.log(balancedParentheses("{[]()}"));
// //console.log(balancedParentheses("{[(])}"));
// console.log(balancedParentheses("{[}"));

// var arrLiteral = [8, 9, 10, 11, 12];
// const [, a, b, ...arr] = arrLiteral;
// console.log("value3 is: " + a);
// console.log("value2 is: " + b);
// console.log(...arr);

// function pointValues(point) {
//   const { name: n, age: a } = { ...point };
//   console.log(n);
//   console.log(a);
// }
// //pointValues({ name: "jerry", age: 2 });
// pointValues(undefined);
