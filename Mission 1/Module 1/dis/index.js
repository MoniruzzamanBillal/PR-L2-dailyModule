"use strict";
let message = "welcome to typescript !!";
console.log(message);
// string datatyype
let myName = "my name ";
// number
let rollNo = 1234;
// boolean
let isAdmin = true;
// undefined
let userName = undefined;
// null
let userRole = null;
let id;
id = 1234;
// array
let loggedInUsers = ["name 1", "name 2", "name 3"];
let passedId = [1, 2, 4, 7, 8];
// tuple
let userDetail = [20, "name 1"];
// object
const studentInfo = {
    Sname: "monir",
    Sid: 221,
    Sdept: "cse",
    Shome: "Gazipur",
};
// function
function addNum(num1, num2) {
    return num1 + num2;
    //   return "hello world !! ";
}
addNum(2, 4);
const addSum = (num1 = 2, num2 = 5) => {
    return num1 + num2;
};
addSum(2, 6);
const numArr = [2, 4, 6, 8];
const newArr = numArr.map((element) => {
    return element * element;
});
console.log(newArr);
