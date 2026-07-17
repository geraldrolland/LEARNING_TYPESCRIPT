// File: typescript_simple_types_task_2026_07_12.ts

/*
1) String Variable
Create a variable that stores your full name using the appropriate primitive type.
*/

let fullName: string = "John Doe";
// correct

/*
2) Number Variable
Store your age in a variable using the correct primitive type.
*/

let age: number = 25;
// correct


/*
3) Boolean Variable
Create a variable that indicates whether you have completed today's TypeScript practice.
*/

let completedPractice: boolean = true;
// correct


/*
4) Type Annotation
Declare variables for:
- your country
- your favorite number
- whether you own a laptop
Explicitly annotate each with its type.
*/

let country: string = "Nigeria";
let favoriteNumber: number = 7;
let ownsLaptop: boolean = true;

// correct


/*
5) Type Inference
Declare several primitive variables without writing type annotations.
TypeScript will infer their types.
*/

let city = "Lagos";       // inferred as string
let year = 2026;          // inferred as number
let isStudent = false;    // inferred as boolean
// correct

/*
6) Template String
Create a sentence that combines your name, age, and country into a single string.
*/

let introduction = `My name is ${fullName}, I am ${age} years old, and I live in ${country}.`;

console.log(introduction);
// correct


/*
7) Undefined
Declare a variable that has the type undefined.
Assign it the appropriate value.
*/

let notAssigned: undefined = undefined;
// correct

/*
8) Null
Create a variable that can store only null.
Assign the correct value.
*/

let emptyValue: null = null;
//correct


/*
9) BigInt
Store a very large number that exceeds JavaScript's safe integer limit.
*/

let hugeNumber: bigint = 900719925474099199999999999999999n;
// correct

/*
10) Symbol
Create two different symbols with the same description.
Check whether they are equal.
*/

const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

// console.log(symbol1 === symbol2); // false
// correct

/*
11) Literal Types
Create a variable that can only hold the string "admin".
Try assigning another string and observe what TypeScript reports.
*/

let userRole: "admin" = "admin";
// correct

// Uncomment the line below to see the TypeScript error.
// userRole = "user";

/*
12) Union of Primitive Types
Create a variable that can hold either a string or a number.
Assign both values one after the other.
*/

let id: string | number;

id = "EMP001";
id = 101;

/*
13) Readonly Primitive
Declare a constant representing the value of π (pi).
Attempt to change its value and observe the result.
*/

const PI: number = 3.14159;
// correct

// Uncomment the line below to see the error.
// PI = 3.14;

/*
14) Mini Profile
Create variables to represent:
- first name
- last name
- age
- height
- is employed
- phone number (stored as a string)
- favorite programming language
*/

let firstName: string = "John";
let lastName: string = "Doe";
let profileAge: number = 25;
let height: number = 1.75;
let isEmployed: boolean = true;
let phoneNumber: string = "08012345678";
let favoriteProgrammingLanguage: string = "TypeScript";

// correct