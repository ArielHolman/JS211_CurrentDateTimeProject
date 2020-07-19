// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
let firstNum = null;

const saveNumber = (num) => {
  firstNum = parseInt(num);
};

const numToString = () => {
  let saveNumber = firstNum.toString();
  return (document.getElementById("numInput").innerHTML =
    saveNumber + " is a " + typeof saveNumber);
};

// Write a JavaScript program to convert a string to the number.

const stringToNum = () => {
  let string2 = parseInt(firstNum);
  return (document.getElementById("stringInput").innerHTML =
    string2 + " is a " + typeof string2);
};

// console.log("stringToNum:",stringToNum("54"))

const convertType = () => {
  let a = stringToNum();
  let b = numToString();

  return a && b;
};

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
// let text = null;

const dataType = () => {
  let x = typeOfData();
  return (document.getElementById("typeInput").innerHTML =
    x + " is a " + typeof x);
};


// Write a JavaScript program that adds 2 numbers together.

let secondNum = null;
let thirdNum = null;

const saveSecondNumber = (num) => {
  secondNum = parseInt(num);
};

const saveThirdNumber = (num) => {
  thirdNum = parseInt(num);
};

const multiNumFunctions = () => {
  let a = numAdd();
  let b = twoTrue();
  let c = halfTrue();
  let d = notTrue();

  return a && b && c && d;
  
};

const numAdd = () => {
  const sum = secondNum + thirdNum;
  return (document.getElementById("sumOfNum").innerHTML = sum);
  // return sum;- for testing
};

// console.log("addedNums:", numAdd(3, 7));- should be sum

// Write a JavaScript program that runs only when 2 things are true.

const twoTrue = () => {
  if (secondNum && thirdNum) {
    return (document.getElementById("dosTrueNum").innerHTML = true);
    // return true;- for testing
  } else {
    return (document.getElementById("dosTrueNum").innerHTML = false);
    // return false;- for testing
  }
};

// console.log("twoTrue :", twoTrue(9, 9));- should be true
// console.log("twoTrue :", twoTrue(0, 9));- should be false

// Write a JavaScript program that runs when both things are not true.

const notTrue = () => {
  if (!secondNum && !thirdNum) {
    return (document.getElementById("dosFalseNum").innerHTML = true);
    // return true;- for testing
  } else {
    return (document.getElementById("dosFalseNum").innerHTML = false);
    // return false;- for testing
  }
};

// console.log("notTrue :", notTrue(9, 2));- should be false

// Write a JavaScript program that runs when 1 of 2 things are true.

const halfTrue = () => {
  let bothTrue = twoTrue(secondNum, thirdNum);
  let bothFalse = notTrue(secondNum, thirdNum);
  let oneOfTwo = secondNum|| thirdNum;
  if (!bothTrue && !bothFalse && oneOfTwo) {
    return document.getElementById("eitherTrue").innerHTML = true
    // return true;- for testing
  } else {
    return document.getElementById("eitherTrue").innerHTML = false
    // return false;- for testing
  }
};

// console.log("halfTrue :", halfTrue(5, 0));- should be true
// console.log("halfTrue :", halfTrue(0, 0));- should be false
// console.log("halfTrue :", halfTrue(5, 5));- should be false

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
