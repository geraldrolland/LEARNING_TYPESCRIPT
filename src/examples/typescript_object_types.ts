/**
 * TypeScript Arrays
 */

const names: string[] = [];
names.push("Gerald");
console.log(names);

// the readonly keyword

const numbers: readonly number[] = [4, 8, 9];
// numbers[0] = 1; with readonly keyword element can on ly be read and cannot be modified in place
console.log(numbers);

const animals: readonly string[] = ["cat"];
// animals.push("dog");
console.log(animals);

// Type Inference in Array

const fruits = ["mango", "orange"];
fruits.push("pawpaw");
console.log(fruits);

const countries = ["Nigeria", true, 4, Symbol("")]
let y: (string | number | boolean)[]

// TypeScript Tuples

const things: readonly [string, boolean, number] = ["Gerald", true, 4];

console.log(things);

// Named Tuples

const coords: [x: number, y: number] =  [42.5, 55.2];
console.log(coords);

const profile: [name: string, age: number] = ["Gerald", 20];
console.log(profile);

// Destructuring Tuples

const planets: [earth: string, venus: string] = ["earth", "venus"]

// destructured
const [x, z] = planets;
console.log(x);

// TypeScript Object Types

const person: {name: string, age: number, country?: string} = {
    name: "Gerald",
    age: 20,
}

const {name, age, country} = person
console.log(name);
console.log(age);
console.log(country);
console.log(person);

const car = {
    model: "toyota"
}

// car.model = 4; throws error

// car.make = 2005; throws error

/***
 * Index Signatures
Index signatures can be used for objects without a defined list of properties.
 */

const employee: {[index: string]: string | number | boolean} = {}

employee.name = "Gerald",
employee.name = "software department"
employee.age = 42
employee.onVacation = true

/**
 * TypeScript Enums
 */

/**
 * An enum is a special "class" that represents a group of constants (unchangeable variables).

Enums come in two flavors string and numeric.

Let's start with numeric.
 */

/**
 * Numeric Enums - Default
    By default, enums will initialize the first value to 0 and add 1 to each additional value:
 */

enum Constants {
    MONDAY, // 0
    TUESDAY, // 1
    WEDNESDAY, // 2
    THURSDAY, // 3
    FRIDAY,
    SATURDAY,
    SUNDAY

}

console.log(Constants);

console.log(Constants.MONDAY);
console.log(Constants.THURSDAY);


/**
 * Numeric Enums - Initialized
You can set the value of the first numeric enum and have it auto increment from that:
 */

enum Months {
    FEBRUARY = "February",
    JENUARY = "Jenuary",
    APRIL = "April"
}

console.log(Months.FEBRUARY);


/**
 * Numeric Enums - Fully Initialized
You can assign unique number values for each enum value.

Then the values will not be incremented automatically:
 */

enum StatusCodes {
    NOTFOUND = 404,
    BAD_REQUEST = 400,
    TOO_MANY_REQUEST = 429,
    AUTHENTICATION_REQUIRED = 401
}

console.log(StatusCodes.AUTHENTICATION_REQUIRED)

enum MathConstants {
    PI = 3.142,
}

console.log(MathConstants.PI)


/**
 * create a file in the exercise folder calde typescript_object_types_task_2026_07_17.ts
 * Array Types (4 Exercises)
1. Student Scores

Create an array that stores the scores of 15 students. Ensure only numbers can be added to the array.

2. Favorite Programming Languages

Create an array containing your favorite programming languages. Attempt to add a number to the array and observe what TypeScript reports.

3. Mixed Product Categories

Create two separate arrays:

One containing product names.
Another containing product prices.

Ensure each array only accepts the appropriate data type.

4. Employee Records

Create an array that stores employee names. Write logic to:

Add a new employee.
Remove an employee.
Find whether a specific employee exists.

Use appropriate array typing.

Tuple Types (3 Exercises)
5. Student Information

Represent a student using a tuple containing:

Student ID
Full Name
GPA

Ensure the values always appear in the correct order and data types.

6. GPS Coordinates

Represent a location using a tuple that stores:

Latitude
Longitude

Prevent additional elements from being added.

7. Product Inventory

Create a tuple representing a product with:

Product ID
Product Name
Price
Availability Status

Ensure every product follows the same structure.

Object Types (5 Exercises)
8. User Profile

Create an object representing a user containing:

Name
Email
Age
IsVerified

Ensure each property has the correct type.

9. Online Course

Create an object representing an online course with:

Title
Instructor
Price
Number of Students
Published Status
10. Car Information

Design an object describing a car with:

Brand
Model
Year
Color
Automatic Transmission (true/false)
11. Company Employee

Create an object for an employee containing:

Employee ID
Name
Department
Salary
List of Skills

The skills property should only accept strings.

12. Shopping Cart Item

Create an object representing a shopping cart item with:

Product Name
Quantity
Unit Price
Discount Percentage
Whether the item is in stock
Enum Types (2 Exercises)
13. Order Status

Create an enum representing the status of an online order with values such as:

Pending
Processing
Shipped
Delivered
Cancelled

Create a variable that stores one of these statuses.

14. User Roles

Create an enum representing different user roles in a web application:

Admin
Moderator
Editor
Author
Subscriber

Create several users and assign each one an appropriate role using the enum.
 */