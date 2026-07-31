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
}:

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


