// 
// Array Types (4 Exercises)
// 

// 1. Student Scores
let studentScores: number[] = [85, 90, 78, 88, 92, 76, 81, 95, 87, 79, 84, 91, 89, 77, 93];

studentScores.push(96); // Allowed
// studentScores.push("A"); //  Error: Argument of type 'string' is not assignable to type 'number'.
// correct


// 2. Favorite Programming Languages
let favoriteLanguages: string[] = [
  "TypeScript",
  "JavaScript",
  "Python",
  "C#"
];

favoriteLanguages.push("Java");

// favoriteLanguages.push(100);
//  TypeScript Error:
// Argument of type 'number' is not assignable to parameter of type 'string'.

// correct

// 3. Mixed Product Categories
let productNames: string[] = [
  "Laptop",
  "Phone",
  "Keyboard"
];

let productPrices: number[] = [
  1200,
  800,
  100
];

productNames.push("Mouse");
productPrices.push(50);

// productNames.push(500);    //  Error
// productPrices.push("200"); //  Error

// correct


// 4. Employee Records
let employees: string[] = [
  "Alice",
  "Bob",
  "Charlie"
];

// Add employee
employees.push("David");

// Remove employee
const index = employees.indexOf("Bob");
if (index !== -1) {
  employees.splice(index, 1);
}

// Find employee
const employeeName = "Charlie";
const exists = employees.includes(employeeName);

console.log(`${employeeName} exists: ${exists}`);

// correct


// 
// Tuple Types (3 Exercises)
//

// 5. Student Information
let student: [number, string, number] = [
  101,
  "John Doe",
  3.8
];

console.log(student);
// correct

// 6. GPS Coordinates
let location: readonly [number, number] = [
  40.7128,
  -74.0060
];

// location.push(10);
//  Error because readonly tuple cannot be modified.

// correct

// 7. Product Inventory
let product: [number, string, number, boolean] = [
  1001,
  "Gaming Mouse",
  49.99,
  true
];

console.log(product);

// correct

// 
// Object Types (5 Exercises)
// 

// 8. User Profile
let user: {
  name: string;
  email: string;
  age: number;
  isVerified: boolean;
} = {
  name: "John Smith",
  email: "john@example.com",
  age: 28,
  isVerified: true
};

// correct


// 9. Online Course

type courseType = {
  title: string;
  instructor: string;
  price: number;
  numberOfStudents: number;
  published: boolean;
}

let course: courseType  = {
  title: "Learn TypeScript",
  instructor: "Jane Doe",
  price: 49.99,
  numberOfStudents: 1200,
  published: true
};

// correct


// 10. Car Information
let car: {
  brand: string;
  model: string;
  year: number;
  color: string;
  automatic: boolean;
} = {
  brand: "Toyota",
  model: "Corolla",
  year: 2024,
  color: "White",
  automatic: true
};

// correct

// 11. Company Employee
let employee: {
  employeeId: number;
  name: string;
  department: string;
  salary: number;
  skills: string[];
} = {
  employeeId: 501,
  name: "Sarah",
  department: "Engineering",
  salary: 75000,
  skills: ["TypeScript", "JavaScript", "React"]
};

employee.skills.push("Node.js");
// employee.skills.push(100);

// correct

// 12. Shopping Cart Item
let cartItem: {
  productName: string;
  quantity: number;
  unitPrice: number;
  discountPercentage: number;
  inStock: boolean;
} = {
  productName: "Wireless Headphones",
  quantity: 2,
  unitPrice: 99.99,
  discountPercentage: 10,
  inStock: true
};

// correct

//
// Enum Types (2 Exercises)
//

// 13. Order Status
enum OrderStatus {
  Pending,
  Processing,
  Shipped,
  Delivered,
  Cancelled
}

let currentOrderStatus: OrderStatus = OrderStatus.Processing;

console.log(currentOrderStatus);

// correct

// 14. User Roles
enum UserRole {
  Admin = "admin",
  Moderator = "moderator",
  Editor = "editor",
  Author = "author",
  Subscriber = "subscriber"
}

let user1 = {
  name: "Alice",
  role: UserRole.Admin
};

let user2 = {
  name: "Bob",
  role: UserRole.Editor
};

let user3 = {
  name: "Charlie",
  role: UserRole.Moderator
};

let user4 = {
  name: "David",
  role: UserRole.Author
};

let user5 = {
  name: "Emma",
  role: UserRole.Subscriber
};

console.log(user1, user2, user3, user4, user5);

// correct