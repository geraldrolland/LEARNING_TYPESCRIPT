/**
 * TypeScript Utility Types
 * TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

This chapter covers the most popular utility types.
 */

/**
 * Partial
Partial changes all the properties in an object to be optional.
 */

type userType = {
    id: number,
    name: string
}


const user: Partial<userType> = {}
user.id = 1
user.name = "Gerald"

/**
 * Required
Required changes all the properties in an object to be required.
 */

interface employeeType {
    id?: number,
    name?: string
}

const emp: Required<employeeType> = {
    id: 1,
    name: "Giwa"
}

/**
 * Record
Record is a shortcut to defining an object type with a specific key type and value type.
 */

const account: Record<string, number | string | boolean> = {
    "firstName": "Gerald",
    "lastName": "Rolland",
    "acctBalance": 56800,
    "isSavings": true,
}


/**
 * Omit
Omit removes keys from an object type.
 */

interface personType {
    id: number,
    name: string,
    age: number
}

const person: Omit<personType, "age" > = {
    id: 1,
    name: "gerald",
}

/***
 * Pick
Pick removes all but the specified keys from an object type.
 */

interface carType {
    model: string,
    manufacturingDate: Date,
    manId: string
}

const car: Pick<carType, "model" | "manId"> = {
    model: "Toyota",
    manId: "njnvjwfnv"
}

/**
 * Exclude
Exclude removes types from a union.
 */

type statusEnum = 'pending' | 'rejected' | 'approved'

// const status: Exclude<statusEnum, 'pending'> = 'pending'

/**
 * ReturnType
ReturnType extracts the return type of a function type.
 */

interface customerType {
    id: number,
    name: string
    email: string
}

type customerReturnType = (id: number) => customerType

const getCustomer = (id: number): ReturnType<customerReturnType> => {
    return {
        id: 1,
        name: "gerald",
        email: "gerald@gmail.com"
    }
}

/**
 * Parameters
Parameters extracts the parameter types of a function type as an array.
 * *
 **/
type PointPrinter = (p: { x: number; y: number; }, h: number) => void;
const point: Parameters<PointPrinter>[0] = {
    x: 1,
    y: 2
}


/**
 * Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
 */

interface courseType {
    title: string,
    pubDate: Date,
    price: number
}

const course: Readonly<courseType> = {
    title: "my piece",
    pubDate: new Date(),
    price: 1258400
}

// course.title = "things fall apart"


/****
 * create a file called typescript_utility_types_2026_08_09.ts
 * Beginner

1. Partial<T> – Update User Profile
Create a User type with properties such as id, name, email, and age.
Create a type for updating a user where all properties are optional.
Utility type: Partial<T>

2. Required<T> – Complete Product Information
Create a Product type where some properties are optional, such as description and discount.
Create another type that makes every property required.
Utility type: Required<T>

3. Readonly<T> – Application Configuration
Create a configuration type containing properties such as apiUrl, port, environment, and debug.
Create a readonly version so that configuration values cannot be modified after creation.
Utility type: Readonly<T>

4. Pick<T, K> – Employee Summary
Create an Employee type containing at least 6 properties.
Create a new type containing only the employee's name, department, and jobTitle.
Utility type: Pick<T, K>

Intermediate

5. Omit<T, K> – Public User Information
Create a User type containing properties such as id, name, email, password, and phoneNumber.
Create a new type for public user information that excludes sensitive properties.
Utility type: Omit<T, K>

6. Record<K, T> – Product Inventory
Create a union type representing several product categories such as electronics, clothing, books, and food.
Create an inventory type where each category must have a numeric stock value.
Utility type: Record<K, T>

7. Exclude<T, U> – Permission System
Create a union of permissions such as read, write, delete, admin, and guest.
Create a new type that removes admin and guest from the available permissions.
Utility type: Exclude<T, U>

8. Extract<T, U> – Supported Events
Create a union containing different event names, including mouse events, keyboard events, and custom application events.
Create a type that extracts only the keyboard-related events.
Utility type: Extract<T, U>

Advanced

9. NonNullable<T> – API Response Data
Create a type representing an API response where several properties can contain null or undefined.
Create a new type for a property that guarantees the value is neither null nor undefined.
Utility type: NonNullable<T>

10. ReturnType<T> – Service Functions
Create several functions representing services such as fetching users, creating products, and retrieving orders.
Create types that automatically represent the return values of those functions without manually rewriting the return types.
Utility type: ReturnType<T>

11. Parameters<T> – Function Arguments
Create a function that accepts several parameters, such as userId, role, and isActive.
Create a type representing the function's entire parameter list.
Then create another function that uses the same parameter structure.
Utility type: Parameters<T>

12. ConstructorParameters<T> + InstanceType<T> – Class Factory
Create a class representing a database connection with properties such as host, port, and database.
Use utility types to:
 */
