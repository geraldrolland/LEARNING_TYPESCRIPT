// 1. Object Property Validator
// --------------------------------

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UserProperty = keyof User;

let validProperty: UserProperty;

validProperty = "name";   // 
validProperty = "email";  // 
validProperty = "age";    // 



// 2. Generic Property Getter


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
  age: 30
};

const userName = getProperty(user, "name");   
const userAge = getProperty(user, "age");     



// 3. Update Specific Property


type Update<T> = {
  key: keyof T;
  value: T[keyof T];
};

const userUpdate: Update<User> = {
  key: "name",
  value: "Jane"
};

const ageUpdate: Update<User> = {
  key: "age",
  value: 35
};

type StrictUpdate<T> = {
  [K in keyof T]: {
    key: K;
    value: T[K];
  }
}[keyof T];

const strictNameUpdate: StrictUpdate<User> = {
  key: "name",
  value: "Jane"
};

const strictAgeUpdate: StrictUpdate<User> = {
  key: "age",
  value: 35
};




// 4. Nested Configuration Access


type Configuration = {
  database: {
    host: string;
    port: number;
  };
  server: {
    port: number;
  };
  logging: {
    enabled: boolean;
  };
};

type ConfigurationKey = keyof Configuration;

let configKey: ConfigurationKey;

configKey = "database"; 
configKey = "server";   
configKey = "logging";  



// 5. Sort Object Properties


function sortBy<T, K extends keyof T>(items: T[], property: K): T[] {
  return [...items].sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA < valueB) return -1;
    if (valueA > valueB) return 1;
    return 0;
  });
}

const users: User[] = [
  { id: 2, name: "Zack", email: "zack@example.com", age: 25 },
  { id: 1, name: "Anna", email: "anna@example.com", age: 32 },
];

const sortedByName = sortBy(users, "name");
const sortedByAge = sortBy(users, "age");  
    


// 6. Nullable User Profile


type UserProfile = {
  name: string | null;
  email: string | null;
  age: number | null;
  phone: string | null;
};

function displayProfile(profile: UserProfile): string {
  const name = profile.name ?? "Unknown";
  const email = profile.email ?? "No email provided";
  const age = profile.age !== null
    ? `${profile.age} years old`
    : "Age not provided";

  return `${name} - ${email} - ${age}`;
}

const profile: UserProfile = {
  name: "Alice",
  email: null,
  age: 28,
  phone: null
};

console.log(displayProfile(profile));


// 7. Nullable API Response


type ApiResponse<T> = {
  data: T | null;
  success: boolean;
  message: string;
};

type UserData = {
  id: number;
  name: string;
};

function handleUserResponse(response: ApiResponse<UserData>): string {
  if (response.data === null) {
    return `No user found: ${response.message}`;
  }

  return `User: ${response.data.name} (ID: ${response.data.id})`;
}

const successfulResponse: ApiResponse<UserData> = {
  data: {
    id: 1,
    name: "John"
  },
  success: true,
  message: "User found"
};

const emptyResponse: ApiResponse<UserData> = {
  data: null,
  success: false,
  message: "User not found"
};

console.log(handleUserResponse(successfulResponse));
console.log(handleUserResponse(emptyResponse));


// 8. Strict Null Checking

let text: string = "Hello";
let numberValue: number = 42;

let nullableText: string | null = null;
let nullableNumber: number | null = null;

text = "World";       
numberValue = 100;    

nullableText = null;  
nullableText = "Hi";  

nullableNumber = null; 
nullableNumber = 50;   



// 9. Nullable Function Parameter

function greetUser(name: string | null): string {
  if (name === null) {
    return "No name was provided.";
  }

  return `Hello, ${name}!`;
}

console.log(greetUser("Alice"));


console.log(greetUser(null));



// 10. Combining keyof and null


function updateProperty<T, K extends keyof T>(
  obj: T,
  key: K,
  value: T[K] | null
): void {
  obj[key] = value as T[K];
}

const person = {
  name: "John",
  age: 30,
  active: true
};

updateProperty(person, "name", "Jane"); 
updateProperty(person, "name", null);   

updateProperty(person, "age", 35);      
updateProperty(person, "age", null);    

updateProperty(person, "active", false); 
updateProperty(person, "active", null);  

