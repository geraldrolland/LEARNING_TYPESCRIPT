/***
 * Infer Keyword
Capture a part of a type within a conditional type by introducing a new type variable with infer.
 */

// Get return type of a function
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

/***
 * Distributed Conditional Types
Understand how conditionals distribute over unions versus when they are wrapped to prevent distribution.
 */

type ToArrayNonDist<T> = T extends any ? T[] : never;

// const arr: ToArrayNonDist<never> = ["gerald"]


type GenericType<T> = T extends string ? "user" | "admin" : number

const num: GenericType<number> = 2;

const role: GenericType<string> = "user";

// Filter out non-string types
type FilterStrings<T> = T extends string ? T : never;

type AllString = FilterStrings<"a" | "b" |
1>;

const myVar: AllString = "b";

/***
 * Template Literal Types
Template literal types allow you to build types using template literal syntax.

Basic Template Literal Types
Constrain strings to specific patterns using template literals and unions.
 */

type myType = "user" | "admin";

type Greeting = `hello, ${string}`;

const greeting: Greeting = "hello, giwas";


// With unions
type Color = `#${string}`;
type Size = 'small' | 'medium' | 'large';


type Style = `${Color}-${Size}`;

const myStyle: Style = "#ragsuhg-small"

/**
 * String Manipulation Types
Apply built-in helpers to transform string literal types (uppercasing, capitalizing, etc.).
 */

type T1 = Uppercase<"hello"> // HELLO

const t: T1 = "HELLO"

type Event = "click" | "mouse" | "focus"

type EventTriggers = `on${Capitalize<Event>}` // onClick, onMouse, onFocus

const myTrigger: EventTriggers = "onMouse"

const triggerFunc = (event: Event, action: EventTriggers): void => {
    console.log("performing action");
}


// Extract route parameters
type ExtractRouteParams<T> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof ExtractRouteParams<`${Rest}`>]: string }
    : T extends `${string}:${infer Param}`
    ? { [K in Param]: string }
    : {};

type Params = ExtractRouteParams<'/users/:userId/posts/:postId'>;
// { userId: string; postId: string; }
// params = {[K in ["userid" | "postid"]]: string}

// Create a type-safe event emitter
type EventMap = {
  click: { x: number; y: number };
  change: string;
  keydown: { key: string; code: number };
};

type EventHandlers = {
  [K in keyof EventMap as `on${Capitalize<K>}`]: (event: EventMap[K]) => void;
};

/***
 * create a file called typecript_contional_literal_task.ts
 * 1. Distribute Over a Union

Create a conditional type that takes a union of types such as string | number | boolean and transforms each member into a corresponding descriptive type.

Goal: Understand how conditional types distribute over unions.

2. Filter a Union

Create a type that receives a union containing several types and returns only the string members.

Example concept: Given a union containing strings, numbers, and booleans, extract only the strings.

Goal: Practice distributive conditional types as type filters.

3. Exclude Specific Types

Create a generic conditional type that receives a union and removes all null and undefined members from it.

Goal: Build your own version of a common TypeScript utility using conditional types.

4. Union to Array Representation

Create a conditional type that transforms every member of a union into an object containing:

The original value/type
A descriptive category
Whether it is primitive

Test it with a union containing string, number, boolean, and object.

Goal: Understand how distribution applies the conditional logic independently to every union member.

5. Create Event Names with Template Literals

Given an object representing properties such as:

name
age
email
isActive

Create a type that generates event names such as:

nameChanged
ageChanged
emailChanged
isActiveChanged

Goal: Practice template literal types combined with keyof.

6. Create Getter Method Names

Given an object with several properties, generate corresponding getter names.

For example, properties should produce names following the pattern:

getName, getAge, getEmail, etc.

Goal: Combine keyof, template literal types, and capitalization transformations.

7. Create REST API Method Names

Given a union of resource names such as:

User
Product
Order

Generate method names following these patterns:

getUser
createUser
updateUser
deleteUser

and the equivalent methods for the other resources.

Goal: Practice combining unions with multiple template literal patterns.

8. Extract Parameters from Event Names

Create a type that receives event names following a pattern such as:

userCreated, userDeleted, productCreated, productDeleted

and extracts the resource portion from the event name.

For example, it should be able to determine that userCreated relates to user.

Goal: Practice template literal type inference using infer.

9. Build a Typed Route Parser

Create a type that accepts route patterns such as:

/users/:id
/users/:id/posts/:postId
/products/:productId/reviews/:reviewId

and extracts the dynamic parameter names.

For /users/:id/posts/:postId, the resulting type should identify id and postId.

Goal: Combine recursive conditional types, template literal types, and infer.

10. Advanced: Typed Event System

Create a generic type system for an event-driven application.

Given an object describing events and their payloads, generate valid event names using a pattern such as:

user:created
user:deleted
order:created
order:cancelled
 */