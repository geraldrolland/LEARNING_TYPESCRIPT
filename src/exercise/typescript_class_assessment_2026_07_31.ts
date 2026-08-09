//  User Profie casting
type User = {
    id: number;
    name: string;
    email: string;
};

const apiData: unknown ={
    id:1,
    name: 'Abdulrahman',
    email:'abdulrahman449@gmail.com'
};

const user = apiData as User;

console.log(user.id);
console.log(user.name);
console.log(user.email);

//2
type Product = {
    name: string;
    price: number;
    quantity: number;
    instock: boolean;
};

const product: Product = {
    name: 'Keyboard',
    price: 25000,
    quantity: 5,
    instock: true
};

const totalinventoryValue = product.price*product.quantity;

console.log('total Inventory Value:', totalinventoryValue);

//3 Casting JSON DATA
type Book ={
    title: string;
    author:string;
    year:number;

};

const jsonString = '{"title":"Titanic","author":"giwa","year":2026}';

const parsed = JSON.parse(jsonString)as Book;

console.log(parsed.title);
console.log(parsed.author);
console.log(parsed.year);

//4
type Employee = {
    employeeid: number;
    fullName: string;
    department: string;
    salary: Number;
}

const Employee: Employee={
    employeeid: 101,
    fullName:'giwa hex',
    department:'IT',
    salary: 1000000
};

function updateDepartment(emp:Employee,newDepartment:string): void{emp.department = newDepartment;}

updateDepartment(Employee, 'HR');
console.log(Employee);

//5
const inputElement = document.getElementById('username') as HTMLInputElement;

console.log(inputElement.value);

inputElement.value = 'New Username';

//6
type Student = {
  name: string;
  age: number;
  grade: string;
  courses: string[];
};

const student: Student = {
  name: "John Doe",
  age: 20,
  grade: "A",
  courses: ["Mathematics", "Physics", "English"]
};

// Add a new course
student.courses.push("Computer Science");

// Remove an existing course
student.courses = student.courses.filter(course => course !== "Physics");

console.log(student);

//7
type Customer = {
  id: number;
  name: string;
  active: boolean;
};

const apiResponse: unknown[] = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

const customers: Customer[] = apiResponse.map(item => item as Customer);

const activeCustomers = customers.filter(customer => customer.active);

console.log(activeCustomers);



//9
type Settings = {
  theme: string;
  language: string;
  notifications: boolean;
};

const externalConfig: unknown = {
  theme: "Light",
  language: "English",
  notifications: true
};

const settings = externalConfig as Settings;

// Update a setting
settings.theme = "Dark";

console.log(settings);

//10
type Customers = {
  name: string;
  email: string;
};

type Item = {
  name: string;
  price: number;
  quantity: number;
};

type Order = {
  customers: Customers;
  items: Item[];
  status: "Pending" | "Paid" | "Shipped";
};

const order: Order = {
  customers: {
    name: "Jane Smith",
    email: "janefrerdick@gmail.com",
  },
  items: [
    {
      name: "Laptop",
      price: 800,
      quantity: 1
    },
    {
      name: "Mouse",
      price: 20,
      quantity: 2
    }
  ],
  status: "Pending"
};

// Calculate total cost
const totalCost = order.items.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

console.log("Total Cost: $" + totalCost);

// Update order status after payment
order.status = "Paid";

console.log("Updated Order:", order);
