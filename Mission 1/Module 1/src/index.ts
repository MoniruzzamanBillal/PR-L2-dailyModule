let message: string = "welcome to typescript !!";

console.log(message);

// string datatyype
let myName: string = "my name ";

// number
let rollNo: number = 1234;

// boolean
let isAdmin: boolean = true;

// undefined
let userName: undefined = undefined;

// null
let userRole: null = null;

let id: number;

id = 1234;

// array
let loggedInUsers: string[] = ["name 1", "name 2", "name 3"];

let passedId: number[] = [1, 2, 4, 7, 8];

// tuple
let userDetail: [number, string] = [20, "name 1"];

// object
const studentInfo: {
  Sname: String;
  Sid?: number;
  Sdept: String;
  Shome: "Gazipur";
} = {
  Sname: "monir",
  Sid: 221,
  Sdept: "cse",
  Shome: "Gazipur",
};

// function

function addNum(num1: number, num2: number): number {
  return num1 + num2;
  //   return "hello world !! ";
}

addNum(2, 4);

const addSum = (num1: number = 2, num2: number = 5): number => {
  return num1 + num2;
};

addSum(2, 6);

const numArr: number[] = [2, 4, 6, 8];

const newArr: number[] = numArr.map((element: number): number => {
  return element * element;
});

console.log(newArr);
