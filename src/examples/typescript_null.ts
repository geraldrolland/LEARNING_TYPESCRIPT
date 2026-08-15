/**
 * TypeScript Null & Undefined
 * TypeScript has a powerful system to deal with null or undefined values.

By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.

The rest of this page applies for when strictNullChecks is enabled.
 */

/**
 * Types
null and undefined are primitive types and can be used like other types, such as string.
 */

type User = {
    name: string,
    age: number
} | undefined | null

const user: User = null

let name: string | null = null

console.log(name)


/***
 * Optional Chaining
Optional chaining is a JavaScript feature that works well with TypeScript's null handling.

It allows accessing properties on an object that may or may not exist, using compact syntax.

It can be used with the ?. operator when accessing properties.
 */

interface Person {
    firstName: string,
    lastName: string,
    address?: {
        homeAddr: string,
        city: string,
        state: string,
        country: string
    }
}

const person: Person = {
    firstName: "Gerald",
    lastName: "Rolland",
    address: {
        city: "Ikeja",
        state: "Lagos",
        country: "Nigeria",
        homeAddr: "my home address"
    }
}

console.log(person.address?.city)


/***
 * Nullish Coalescing
Nullish coalescing is another JavaScript feature that also works well with TypeScript's null handling.

It allows writing expressions that have a fallback specifically when dealing with null or undefined.

This is useful when other falsy values can occur in the expression but are still valid.

It can be used with the ?? operator in an expression, similar to using the && operator.
 */

type Employee = {
    name: string
    age: number
} | null

const emp: Employee = {
    name: "Gerald",
    age: 4
}

const greetEmp = (emp: Employee) => {
    console.log(emp ?? "this employee is anonymous");
}

greetEmp(emp);

/***
 * Null Assertion
TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined.

An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.
 */

type Country = string | null

const country: Country = null

// console.log(country!.length)

/***
 * Array Bounds Handling
Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).

The config noUncheckedIndexedAccess can be used to change this behavior.
 */

type ArrType = string[]

const arr: ArrType = ["Gerald", "Giwa"]

console.log(arr[2])

/***
 * create a file called typescript_keyof_null_task_2026_08_15.ts
 * 
Object Property Validator
Create a type that accepts only the property names of a User object. Use keyof to ensure invalid property names produce a TypeScript error.

Generic Property Getter
Design a generic function concept that receives an object and one of its valid property names, then returns the value associated with that property.

Update Specific Property
Create a type that represents an update operation for an object. The update should accept only keys that actually exist on the object.

Nested Configuration Access
Given a configuration object containing properties such as database, server, and logging, create a type that restricts another variable to only those top-level property names.

Sort Object Properties
Design a function that receives an object and a property name to sort by. Use keyof so the property must exist on the object.


Nullable User Profile
Create a UserProfile type where some properties can contain either a value or null. Write a function specification that safely handles those nullable properties.

Nullable API Response
Design a type representing an API response where the returned data can either contain a user object or null. Handle both possibilities safely.

Strict Null Checking
Enable strictNullChecks in a TypeScript project. Create several variables containing strings, numbers, and null, and determine which assignments TypeScript should allow or reject.

Nullable Function Parameter
Design a function that accepts either a string or null. The function should return a meaningful message depending on whether a value was provided.

Combining keyof and null
Create a generic function that receives an object, a key from that object, and a value. The value should be allowed to be either the property's correct type or null. Test it with several different object properties.
 */