/***
 * Advanced TypeScript Types
 * TypeScript's advanced type system allows you to model complex type relationships with precision.

These features are particularly useful for building robust, maintainable applications with excellent type safety.
 */
/****
 *
Mapped Types: Transform properties of existing types
Conditional Types: Create types based on conditions
Template Literal Types: Build types using string templates
Advanced Utility Types: Built-in type helpers for common transformations
 */

/***
 * Mapped Types
Mapped types allow you to create new types by transforming properties of existing types.

Basic Mapped Type
Transform every property of an object type into a new type using a single template.
 */

type ObjectKeys = {
    email: string,
    age: number,
}


type Person = Record<keyof ObjectKeys, string | number>

type MyRecord<T> = {
    [K in keyof T]: string | number
}

const user: MyRecord<ObjectKeys> = {
    email: "gerald",
    age: 4,
}

const person: Person = {
    email: "gerald@gmail.com",
    age: 4,
}


/***
 * Mapped Type Modifiers
Add or remove property modifiers like readonly and ? across all keys.
 */

type CountryCode = '+234' | '+1';

interface Employee {
    id: `emp_${string}`,
    fullName: string,
    email:`${string}@gmail.com` | `${string}@yahoo.com`,
    phoneNum: `${CountryCode}${string}`

}

type OptionalEmployee<T> = {
    [K in keyof T]?: T[K]
}

const myOptionalEmp: OptionalEmployee<Employee> = {
    email: "gerald@gmail.com"
}

type RequiredEmployee<T> = {
   -readonly [K in keyof T]-?: T[K]
}

const reqEmp: RequiredEmployee<OptionalEmployee<Employee>> = {
    id: "emp_1",
    fullName: "my name",
    email: "gerald@gmail.com",
    phoneNum: "+18941789"
}

reqEmp.fullName = "gerald";

type ReadOnlyEmployee<T> = {
   +readonly [K in keyof T]-?: T[K]
}

const readOnlyEmp: ReadOnlyEmployee<OptionalEmployee<Employee>> = {
    id: "emp_1",
    fullName: "my name",
    email: "gerald@gmail.com",
    phoneNum: "+18941789"
}

// readOnlyEmp.fullName = "gerald" throws an error

/**
 * Key Remapping
Rename or filter keys while mapping using as, string helpers, and conditional checks.
 */

type EmployeeMethod<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

const empMethods: EmployeeMethod<Employee> = {
    getId: () => "emp_id",
    getFullName: () => "gerald",
    getEmail: () => "gerald@gmail.com",
    getPhoneNum: () => "+125547895"
}

empMethods.getEmail();

/**
 * Conditional Types
Conditional types allow you to define types that depend on a condition.

Basic Conditional Types
Select between types based on a condition checked at the type level.
 */

class A {
    constructor(){};
}

class B {
    constructor(){};
}

type isA<T> = T  extends A ? true : false


type AType = isA<A>;

const myA: AType = true;

type isBArray<T> = T extends (infer U)[] ? "B_Array" : "A_array"

type checkIsBArr = isBArray<A[]>

/***
 * Exercise 1 — Make All Properties Optional

Create a mapped type that takes an existing User type and makes every property optional.

Requirements:

The original User should have at least 4 properties.
The resulting type should allow any combination of those properties.
Do not use TypeScript's built-in Partial.
Exercise 2 — Make All Properties Readonly

Create a mapped type that converts every property of a Product type into a readonly property.

Requirements:

The original Product should have at least 5 properties.
Attempting to modify any property of the resulting type should produce a TypeScript error.
Do not use the built-in Readonly utility type.
Exercise 3 — Convert Properties to Boolean

Given an object type representing application settings, create a mapped type that transforms every property into a boolean.

For example, conceptually:

darkMode → boolean
notifications → boolean
autoSave → boolean

Requirements:

The resulting type should preserve the original property names.
All resulting property values must be boolean.
The properties should remain required.
Exercise 4 — Nullable Properties

Create a mapped type that takes an existing type and makes every property nullable.

For example, if a property originally accepts a string, the new property should accept either a string or null.

Requirements:

Preserve all property names.
Preserve each property's original type.
Add null to every property's type.
Do not make the properties optional.
Exercise 5 — Create an API Update Type

You have a User type containing properties such as:

id
username
email
password
createdAt
updatedAt

Create a mapped type for a user update operation.

Requirements:

id, createdAt, and updatedAt must not be included in the update type.
The remaining properties should be optional.
You should accomplish this using mapped types and key remapping/filtering.
Do not use Omit or Partial.
Exercise 6 — Property Type Transformation

Create a mapped type that transforms the properties of a type based on their original types.

Given an object with properties containing string, number, and boolean values, transform them according to these rules:

string → string[]
number → number[]
boolean → boolean[]
 */