/***
 * TypeScript Async Programming
 */


/**
 * Promises in TypeScript
TypeScript enhances JavaScript Promises with type safety through generics.

A Promise<T> represents an asynchronous operation that will complete with a value of type T or fail with a reason of type any.
 */

// Create a typed Promise that resolves to a string
const fetchGreeting = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Hello, TypeScript!");
      } else {
        reject(new Error("Failed to fetch greeting"));
      }
    }, 1000);
  });
};

// Using the Promise with proper type inference
fetchGreeting()
  .then((greeting) => {
    // TypeScript knows 'greeting' is a string
    console.log(greeting.toUpperCase());
  })
  .catch((error: Error) => {
    console.error("Error:", error.message);
  });


const fetchingSimulator = (): Promise<{name: string}> => {
    return new Promise((resolve, reject) => {
        console.log("fetching ..........");
        setTimeout(() => {
        const success = Math.random() < 0.3;

        if (success) {
            resolve({name: "gerald"});
        } else {
            reject(new Error("something went wrong"))
        }
        }, 1000);
    })
}


fetchingSimulator()
.then((record) => {
    console.log(record);
})
.catch((error: Error) => {
    console.log(error);
})


/***
 * Async/Await with TypeScript
TypeScript's async/await syntax provides a cleaner way to work with Promises, making asynchronous code look and behave more like synchronous code while maintaining type safety.
 */

// Define types for our API response
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

// Function that returns a Promise of User array
async function fetchUsers(): Promise<User[]> {
  console.log('Fetching users...');
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'user' }
  ];
}

// Async function to process users
async function processUsers() {
  try {
    // TypeScript knows users is User[]
    const users: User[] = await fetchUsers();
    console.log(`Fetched ${users.length} users`);

    // Type-safe property access
    const adminEmails = users
      .filter(user => user.role === 'admin')
      .map(user => user.email);

    console.log('Admin emails:', adminEmails);
    return users;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Failed to process users:', error.message);
    } else {
      console.error('An unknown error occurred');
    }
    throw error; // Re-throw to let caller handle
  }
}

// Execute the async function
processUsers()
  .then(users => console.log('Processing complete'))
  .catch(err => console.error('Processing failed:', err));



  /***
   * Typing Callbacks for Async Operations
For traditional callback-based asynchronous code, TypeScript helps ensure proper typing of the callback parameters:
   */

// Define a type for the callback
type FetchCallback = (error: Error | null, data?: string) => void;

// Function that takes a typed callback
function fetchDataWithCallback(url: string, callback: FetchCallback): void {
  // Simulate async operation
  setTimeout(() => {
    try {
      // Simulate successful response
      callback(null, "Response data");
    } catch (error) {
      callback(error instanceof Error ? error : new Error('Unknown error'));
    }
  }, 1000);
}

// Using the callback function
fetchDataWithCallback('https://api.example.com', (error, data) => {
  if (error) {
    console.error('Error:', error.message);
    return;
  }
  
  // TypeScript knows data is a string (or undefined)
  if (data) {
    console.log(data.toUpperCase());
  }
});

/***
 * create a file called typescript_async_programming_assessment_2026_08_29.ts
 * Exercise 1 — Custom API Error Class

Create a custom error class called ApiError for handling API-related failures.

Requirements:

It should extend the built-in Error class.
Store an HTTP status code.
Store an optional error code such as "NOT_FOUND" or "UNAUTHORIZED".
Make sure the error has the correct name.
Create a function that simulates fetching a user.
Throw different ApiError instances depending on the situation.
Handle the errors and print different messages based on the status code.

Goal: Practice extending built-in classes and creating strongly typed custom errors.

Exercise 2 — Typed Callback for an Async Operation

Create a function that performs an asynchronous operation and accepts a callback.

The callback should receive:

An error value when the operation fails.
A result value when it succeeds.

Requirements:

Define a TypeScript type for the callback.
The operation should return after approximately 2 seconds.
Simulate both successful and failed operations.
The successful result should contain a user object.
The error should be represented by your own custom error class.
Ensure the callback is properly typed and doesn't use any.

Goal: Practice typing callbacks where success and failure have different values.

Exercise 3 — Promise-Based User Service

Build a small user service using Promises.

Create functions for:

Getting a user by ID.
Creating a user.
Updating a user.
Deleting a user.

Requirements:

Every function must return a properly typed Promise.
Define a User interface.
The functions should simulate asynchronous database operations.
Reject the Promise when an operation fails.
Use a custom error class for failures.
Consume the functions using async/await.
Handle errors with try/catch.

Goal: Practice Promise return types and asynchronous TypeScript functions.

Exercise 4 — Promise with Multiple Possible Results

Create a function that checks the status of an online service.

The function should asynchronously return one of several possible results:

Service is online.
Service is offline.
Service is under maintenance.

Requirements:

Define a TypeScript type representing the possible service statuses.
Return the status through a Promise.
Randomly determine the status.
If the service is offline, reject with a custom error.
If it is under maintenance, reject with a different custom error.
Handle each situation separately when consuming the Promise.

Goal: Practice combining union types, Promises, and custom errors.

Exercise 5 — Async Operation Pipeline

Create a small asynchronous data-processing pipeline.

The pipeline should perform these operations:

Fetch a user.
Fetch that user's orders.
Calculate the total amount spent.
Return a summary containing:
User information.
Number of orders.
Total amount spent.

Requirements:

Each operation should return a Promise.
Properly type every Promise.
Define interfaces/types for User, Order, and the final summary.
If the user doesn't exist, throw a custom NotFoundError.
If fetching orders fails, throw a custom DatabaseError.
Chain the operations together.
Implement the same pipeline once using Promise chaining and once using async/await.

Goal: Practice composing multiple typed asynchronous operations.

Exercise 6 — Generic Async Callback Utility

Create a reusable utility that executes any asynchronous operation and passes the result to a callback.

Your utility should be capable of working with different data types, such as:

Users
Products
Orders
Strings
Numbers

Requirements:

Make the utility generic.
Define a generic callback type.
The callback should receive either an error or the successful result.
The asynchronous operation should return a Promise.
Handle rejected Promises and pass the error to the callback.
Do not use any.
Make TypeScript correctly infer the result type when the utility is used with different data types.

Goal: Combine generics + callbacks + Promises + error handling into a reusable TypeScript abstraction.
 */