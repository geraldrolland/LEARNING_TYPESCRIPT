/**
 * TypeScript Classes
 * TypeScript adds types and visibility modifiers to JavaScript classes.

Learn more about JavaScript classes here.

Members: Types
The members of a class (properties & methods) are typed using type annotations, similar to variables.
 */

class Person {
  private _name: string;
  public age: number;

  protected last_name: string;

  public constructor(name: string, age: number, last_name: string) {
    this._name = name;
    this.age = age;
    this.last_name = last_name
  }
}


class Employee extends Person {
  public constructor(name: string, age: number, last_name: string) {
    super(name, age, last_name)
  }
}

const employee = new Employee("Giwa", 20, "Gerald");

employee.age


// class Dog {
//   private name: string;

//   public constructor(name: string) {
//     this.name = name;
//   }
// }


class Dog {
  public constructor(private name: string) {}
}
const dog = new Dog("Broli");



class Vehicle {
  public readonly model: string;

  public constructor(model: string) {
    this.model = model;
  }
}
const vehicle = new Vehicle("toyota");
//vehicle.model = "Honda";
console.log(vehicle.model);


/**
 * Inheritance: Implements
Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.
 */

// implementing an account interface 


interface CustomerType {
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string
}

class Customer implements CustomerType{

  public readonly first_name: string;
  public readonly middle_name?: string;
  public readonly last_name: string;
  public email: string;
  public constructor(first_name: string, middle_name: string, last_name: string, email: string) {
    this.first_name = first_name;
    this.middle_name = middle_name;
    this.last_name = last_name;
    this.email = email;
  }
}


interface AccountType {
  readonly acctNum: string;
  readonly acctBal: number;

  withdraw: (amount: number) => void;
  deposit: (amount: number) => void;
}

class Account implements AccountType {
  public acctNum: string;
  private pin: string;
  public acctBal: number;
  private customer: Customer;
  public constructor(acctNum: string, pin: string, customer: Customer) {
    this.acctBal = 0;
    this.pin = pin;
    this.customer = customer;
    this.acctNum = acctNum;
  }

  public withdraw (amount: number): void  {
    if (amount > this.acctBal) {
      throw new Error("insufficient balance")
    }

    this.acctBal -= amount;
  }

  public deposit (amount: number): void {
    if (amount > 0) {
      throw new Error("invalid amount entered")
    }
    this.acctBal += amount;
  }
}