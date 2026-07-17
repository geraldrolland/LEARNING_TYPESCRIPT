// primitive types in typescript 

// boolean

const isStudent: boolean = true;
console.log(isStudent);

// number

const num: number = 4.25;
console.log(num);

// string

const name: string = "Gerald";
console.log(name);


// BigInt

const hugeNum: BigInt = BigInt(5156464684194684684684)
console.log(hugeNum);


// symbol

const uniqueKey: symbol = Symbol("dnsjfnwsfhoawj")
console.log(uniqueKey);

// explicit types and inference types

const num1 = "Gerald"
console.log(typeof(num1));


// function parmeter with explicit types

function greet(name: string): string {
    return `my name is ${name}`;
}

console.log(greet("gerald"));

const person = {
    name: "gerald",
    "age": 7
}

console.log(person);

const vehicle: {model: string, manufactureDate: string} = {
    model: "Toyota",
    manufactureDate: "2025-05-06",
}

console.log(vehicle);


// any
let anyVar: any = "gerald";
console.log(anyVar);
anyVar = 42;
console.log(anyVar)

// unknown

let x: unknown = "Bolu";
x = true
if (typeof x === "string") {
    console.log("x is string")
} else if (typeof x === "boolean") {
    console.log("x is a boolean")
} else {
    console.log("tye checking for x is not working");
}

// never
// const throwError = (): never => {
//     throw new Error("error")
// }

// console.log(throwError());


// example 

type Vehicle = {
    model: string,
    date: string,
}

const vehicle1: Vehicle = {
    model: "toyota",
    date: "2025-06-09"
};

// let shouldNvrBeVehicle: never = anyVar;


// undefined and null
let myVar: undefined = undefined;

console.log(myVar);

let myNull: null = null

console.log(myNull);

// optional paramter
function salute(name?: string) {
    console.log(`i salute you ${name}`)
}

salute("Onyeka")

// optional paramter
function salute1(name: string = "user") {
    console.log(`i salute you ${name}`)
}

salute1();
salute1("Gerald");

// Nullish Coalescing and Optional Chaining


let z;

const myResult = z ?? "my z is null";
console.log(myResult);

const human: any = {
    name: "Onyeka",
    age: 14,
};

console.log(human?.dob);


const user: any = {
    address: {
        street: "1, lagos"
    }
}

console.log(user?.address?.country);

/**
 * create a file in the exercise directory called typescript_simple_types_task_2026_07_12.ts
 *1) String Variable
Create a variable that stores your full name using the appropriate primitive type.

2) Number Variable
Store your age in a variable using the correct primitive type.

3) Boolean Variable
Create a variable that indicates whether you have completed today's TypeScript practice.

4) Type Annotation
Declare variables for:
your country
your favorite number
whether you own a laptop
Explicitly annotate each with its type.

5) Type Inference
Declare several primitive variables without writing type annotations.
Observe which types TypeScript infers.

6) Template String
Create a sentence that combines your name, age, and country into a single string.

7) Undefined
Declare a variable that has the type undefined.
Assign it the appropriate value.

8) Null
Create a variable that can store only null.
Assign the correct value.

9) BigInt
Store a very large number that exceeds JavaScript's safe integer limit using the correct primitive type.

10) Symbol
Create two different symbols with the same description.
Check whether they are equal.

11)Literal Types
Create a variable that can only hold the string "admin".
Try assigning another string and observe what TypeScript reports.

12)Union of Primitive Types
Create a variable that can hold either a string or a number.
Assign both values one after the other.

13) Readonly Primitive
Declare a constant representing the value of π (pi).
Attempt to change its value and observe the result.

14) Mini Profile
Create variables to represent:
first name
last name
age
height
is employed
phone number (stored as a string)
favorite programming language
Use the appropriate primitive type for each variable.
 */