// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
function convertStringNum (num) {
  return parseInt(num)
}


// Write a JavaScript program to convert a string to the number.

function convertNumToString() {
  var num = 15;
  var n = num.toString();
  document.getElementById("NumToString").value = n;
  return n 
  console.log(n)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
const dataTypes = [0, "Peter", true, null, undefined,]

function thisIsDataType() {
var stringDataType = typeof(document.getElementById("stringDataType").value)
document.getElementById("stringDataType").innerHTML
// console.log(stringDataType)
// var numberDataType = typeof(parseInt(document.getElementById("numberDataType").value))
// console.log(numberDataType)

if (stringDataType) {
  return thisIsDataType()
  
} else {
  
}

// var booleanDataType = typeof(document.getElementById("booleanDataType").value)
// console.log(booleanDataType)
}


  // if(typeof(item) == "string"){
  //   console.log('thisIsAString:' + item)
  // } else if (typeof (item) == 'number'){
  //   console.log('thisIsANumber:'+ item)
  // }else if (typeof (item) == 'boolean'){
  //   console.log('thisIsBoolean:' + item)
  // }else if (typeof (item) == 'NaN'){
  //   console.log('thisIsNull:' + item)
  // }else if (typeof (item) == 'null'){
  //   console.log('null:' + item)
  // }else if (typeof (item) === "undefined"){
  //   console.log('thisIsUndefined:' + item)
  // }else{
  //   console.log('whats not working:' + item)
  //   }
  //   document.getElementById("thisIsDataType").innerHTML = thisIsDataType()




  
// Write a JavaScript program that adds 2 numbers together.
function addTwoNumbers () {
let num1 = parseInt(document.getElementById("num1").value)
let num2 = parseInt(document.getElementById("num2").value)
document.getElementById("addTwoNumbers").innerHTML = num1 + num2

} 




// Write a JavaScript program that runs only when 2 things are true.



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

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
// Video3: https://www.youtube.com/embed/TrGI9Y}

