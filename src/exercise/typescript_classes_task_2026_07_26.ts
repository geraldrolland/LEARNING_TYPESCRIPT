class Student {
  constructor(
    public name: string,
    public age: number,
    public studentId: string
  ) {}

  displayInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Student ID: ${this.studentId}`);
  }

  updateAge(newAge: number): void {
    this.age = newAge;
  }
}

const student1 = new Student("John", 20, "ST001");
const student2 = new Student("Mary", 21, "ST002");

student1.displayInfo();
student2.displayInfo();

student1.updateAge(22);
student1.displayInfo();

// correct

//2
class BankAccount {
  private balance: number;

  constructor(
    public accountNumber: string,
    public accountHolder: string,
    balance: number
  ) {
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }

    this.balance -= amount;
    console.log(`Withdrawn: $${amount}`);
  }

  checkBalance(): void {
    console.log(`Balance: $${this.balance}`);
  }
}


const account = new BankAccount("1001", "Alice", 500);

account.deposit(200);
account.withdraw(100);
account.checkBalance();
// correct


//3
class Book {
  private available = true;

  constructor(
    public title: string,
    public author: string,
    public isbn: string
  ) {}

  borrow(): void {
    if (!this.available) {
      console.log("Book is already borrowed.");
      return;
    }

    this.available = false;
    console.log("Book borrowed.");
  }

  returnBook(): void {
    this.available = true;
    console.log("Book returned.");
  }

  displayDetails(): void {
    console.log(`
        Title: ${this.title}
        Author: ${this.author}
        ISBN: ${this.isbn}
        Available: ${this.available}
        `);
  }
}

const book = new Book("Clean Code", "Robert Martin", "12345");

book.borrow();
book.borrow();
book.returnBook();

// correct

//4
class Employee {
  constructor(
    public employeeId: number,
    public name: string,
    public department: string,
    private salary: number
  ) {}

  annualSalary(): number {
    return this.salary * 12;
  }

  increaseSalary(percent: number): void {
    this.salary += this.salary * (percent / 100);
  }

  displayInfo(): void {
    console.log({
      id: this.employeeId,
      name: this.name,
      department: this.department,
      salary: this.salary,
      annualSalary: this.annualSalary(),
    });
  }
}

const emp = new Employee(1, "John", "IT", 4000);

emp.displayInfo();
emp.increaseSalary(10);
emp.displayInfo();

// correct

//5
class Vehicle {
  constructor(
    public brand: string,
    public model: string
  ) {}

  displayInfo() {
    console.log(`${this.brand} ${this.model}`);
  }
}

class Car extends Vehicle {
  constructor(
    brand: string,
    model: string,
    public numberOfDoors: number
  ) {
    super(brand, model);
  }

  honk() {
    console.log("Beep Beep!");
  }
}

class Motorcycle extends Vehicle {
  constructor(
    brand: string,
    model: string,
    public hasSidecar: boolean
  ) {
    super(brand, model);
  }

  wheelie() {
    console.log("Performing a wheelie!");
  }
}

const car = new Car("Toyota", "Corolla", 4);
const bike = new Motorcycle("Yamaha", "R1", false);

car.displayInfo();
car.honk();

bike.displayInfo();
bike.wheelie();

// correct

//6
class Product {
  constructor(
    public name: string,
    public price: number,
    private stock: number,
    public category: string
  ) {}

  updateStock(quantity: number): void {
    if (quantity < 1) {
      console.log("quantity cannot be negative");
      return;
    } // corrected code

    // if (this.stock + quantity < 0) {
    //   console.log("Stock cannot be negative.");
    //   return;
    // }

    this.stock += quantity;
  }

  applyDiscount(percent: number): void {
    this.price -= this.price * (percent / 100);
  }

  displayDetails(): void {
    console.log({
      name: this.name,
      price: this.price,
      stock: this.stock,
      category: this.category,
    });
  }
}

const product = new Product("Laptop", 1200, 10, "Electronics");

product.applyDiscount(15);
product.updateStock(-2);
product.displayDetails();
// correct

//7


//9
abstract class Payment {
  abstract processPayment(amount: number): void;
}

class CreditCardPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Paid $${amount} with Credit Card`);
  }
}

class BankTransferPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Transferred $${amount} via Bank`);
  }
}

class PayPalPayment extends Payment {
  processPayment(amount: number): void {
    console.log(`Paid $${amount} using PayPal`);
  }
}

const payments: Payment[] = [
  new CreditCardPayment(),
  new BankTransferPayment(),
  new PayPalPayment(),
];

payments.forEach((payment) => payment.processPayment(500));

// correct
