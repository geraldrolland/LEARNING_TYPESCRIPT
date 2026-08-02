/**
 * TypeScript Basic Generics
 */


const add = <T extends string | number | boolean>(a: T, b: T): T => {
    if (typeof a === "number" && typeof b === "number") {
        return (a + b) as T;
    } else if (typeof a === "string" && typeof b === "string") {
        return (a + b) as T;
    } else if (typeof a === "boolean" && typeof b === "boolean") {
        if (a && b) {
            return true as T;
        }else {
            return false as T;
        }
    } else {
        throw new Error("Invalid types. Both parameters must be of the same type (string, number, or boolean).");
    }
}

console.log(add<string>("Hello, ", "World!")); // Output: Hello, World!
console.log(add<number>(5, 10)); // Output: 15
console.log(add<boolean>(true, false)); // Output: false


/**
 * classes with Generics
 */
class Box<T> {
    public heading: string;
    public content: T;

    public constructor(heading: string, content: T) {
        this.heading = heading;
        this.content = content;
    }
}

const box1 = new Box<string>("String Box", "This is a string content");
console.log(box1.heading); // Output: String Box
console.log(box1.content); // Output: This is a string content

const box2 = new Box<number>("Number Box", 42);
console.log(box2.heading); // Output: Number Box
console.log(box2.content); // Output: 42

/**
 * Generics with type aliases
 */

type personType<S, T> = {
    name: S;
    age: T;
    phone: S;
}

const person1: personType<string, number> = {
    name: "John Doe",
    age: 30,
    phone: "123-456-7890"
};

type arrType<T> = T[];


const numbers: arrType<number> = [1, 2, 3, 4, 5];
const strings: arrType<string> = ["apple", "banana", "cherry"];
const booleans: arrType<boolean> = [true, false, true];
const persons: arrType<personType<string, number>> = [
    person1,
    {
        name: "Jane Smith",
        age: 25,
        phone: "098-765-4321"
    }
]

/***
 * Generics with Default Value
Generics can be assigned default values which apply if no other value is specified or inferred.
 */

class Employee<T = string> {
    name: T;
    age: number;

    constructor(name: T, age: number) {
        this.name = name;
        this.age = age;
    }

    public changeName(newName: T): void {
        this.name = newName;
    }
}

const employee1 = new Employee("John Doe", 30); // T is inferred as string
employee1.changeName("Jane Smith"); // Valid, newName is string

const employee2 = new Employee<number>(12345, 25); // T is explicitly set to number
employee2.changeName(67890); // Valid, newName is number

/***
 * Extends
Constraints can be added to generics to limit what's allowed.

The constraints make it possible to rely on a more specific type when using the generic type.
 */

type tupleType<T extends string | number> = [T, T];

const tuple1: tupleType<string> = ["Hello", "World"];
const tuple2: tupleType<number> = [1, 2];
const tuple3: tupleType<string | number> = ["Hello", 42]; // Valid, T can be string or number
// const tuple4: tupleType<boolean> = [true, false]; // Error: Type 'boolean' does not satisfy the constraint 'string | number'.


/***
 * Task: create a file called typescript_simple_types_task_2026_07_12.ts and add the following tasks to it:
 * 1. Create a Generic Identity Function

Write a generic function that accepts a value of any type and returns the exact same value while preserving its type.

2. Generic Array Function

Create a generic function that accepts an array of any type and returns the first element of the array.

3. Generic Pair

Create a generic type that stores two values of the same type. Instantiate it with strings, numbers, and booleans.

4. Generic Object Wrapper

Design a generic interface that wraps any value inside an object with a single property called value.

5. Generic Function with Multiple Type Parameters

Create a generic function that accepts two values of different types and returns them together in a single object.

6. Generic Stack

Implement a generic stack class that supports the following operations:

Add an item
Remove the last item
View the last item without removing it
Check if the stack is empty

The stack should work with any data type.

7. Generic Queue

Create a generic queue class with the following operations:

Add an item to the end
Remove the first item
Get the first item
Check the queue size

Ensure it works for multiple data types.

8. Generic Constraints

Create a generic function that accepts only values that have a length property and returns the length of the value.

Test it with strings, arrays, and objects that contain a length property.

9. Generic Property Accessor

Write a generic function that receives an object and one of its property names, then returns the corresponding property value.

The property name should be restricted to valid keys of the object.

10. Generic Repository

Design a generic repository class capable of storing any type of object. Include methods to:

Add an item
Retrieve all items
Find an item by its index
Remove an item by its index
11. Generic API Response

Create a generic interface to represent an API response containing:

A success flag
A message
A data property whose type is generic

Use it to represent responses containing users, products, and orders.

12. Generic Merge Function

Create a generic function that accepts two objects and returns a new object containing the properties of both.

The returned object should preserve the types of both inputs.

13. Generic Key-Value Store

Design a generic class that stores key-value pairs where:

Keys are strings.
Values can be any generic type.

Include methods to:

Add a value
Retrieve a value by key
Delete a value
Get all stored keys
14. Generic Data Manager (Advanced)

Create a reusable generic class for managing collections of data. It should support:

Adding items
Updating an item
Deleting an item
Searching for an item using a callback function
Filtering items based on a condition
Returning all stored items

The class should work with different entity types such as User, Product, Student, and Employee without
 */