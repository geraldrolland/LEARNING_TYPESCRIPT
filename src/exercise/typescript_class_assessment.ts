//1
interface user {
    id: number;
    name: string;
    email: string;
}

class UserRepository<T extends {id: number}>{
  private items:T[]=[]; // [{id: 2}, {id: 3}]

    add(item:T): void {
        this.items.push(item);
    }
    
    findByid(id: number): T | undefined {
    return this.items.find(item=>item.id===id);
    }
    removeByid(id: number): void {
    this.items = this.items.filter(item =>item.id !== id);
    }

    getAll(): T[] {
    return this.items;
    }
  }

const userRepo = new UserRepository<user>();

userRepo.add({id:1, name:"john", email:"ohn.gmail.com"});
userRepo.add({id:2, name:"jane", email:"jane@test.com"});

console.log(userRepo.findByid(1));
console.log(userRepo.getAll())
// correct


//2
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  id: number;
  productId: number;
  quantity: number;
}

// // List of users
// const userResponse: ApiResponse<User[]> = {
//   success: true,
//   message: "Users retrieved successfully",
//   data: [
//     {
//       id: 1,
//       name: "John",
//       email: "john@example.com"
//     }
//   ]
// };

// Single product
const productResponse: ApiResponse<Product> = {
  success: true,
  message: "Product retrieved successfully",
  data: {
    id: 1,
    name: "Laptop",
    price: 1200
  }
};

// List of orders
const orderResponse: ApiResponse<Order[]> = {
  success: true,
  message: "Orders retrieved successfully",
  data: [
    {
      id: 1,
      productId: 10,
      quantity: 2
    }
  ]
};

//3
interface KeyValueStore<K, V> {
  set(key: K, value: V): void;
  get(key: K): V | undefined;
  has(key: K): boolean;
  remove(key: K): void;
}

class Store<K, V> implements KeyValueStore<K, V> {
  private data = new Map<K, V>();

  set(key: K, value: V): void {
    this.data.set(key, value);
  }

  get(key: K): V | undefined {
    return this.data.get(key);
  }

  has(key: K): boolean {
    return this.data.has(key);
  }

  remove(key: K): void {
    this.data.delete(key);
  }
}

// String keys, number values
const scores = new Store<string, number>();

scores.set("John", 95);
scores.set("Jane", 88);

console.log(scores.get("John"));
console.log(scores.has("Jane"));

scores.remove("Jane");

// correct

//4
interface PaginatedData<T> {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  data: T[];
}

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

// Paginated users
const usersPage: PaginatedData<User> = {
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 50,
  data: [
    {
      id: 1,
      name: "John"
    }
  ]
};

// Paginated products
const productsPage: PaginatedData<Product> = {
  currentPage: 2,
  itemsPerPage: 20,
  totalItems: 100,
  data: [
    {
      id: 1,
      name: "Laptop",
      price: 1200
    }
  ]
};

// Paginated blog posts
const postsPage: PaginatedData<BlogPost> = {
  currentPage: 1,
  itemsPerPage: 5,
  totalItems: 25,
  data: [
    {
      id: 1,
      title: "TypeScript Generics",
      content: "Learning generics..."
    }
  ]
};

//5
interface Student {
  id: number;
  name: string;
  age: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Course {
  id: number;
  title: string;
  duration: number;
}

interface Repository<T> {
  create(entity: T): T;
  findById(id: number): T | undefined;
  findAll(): T[];
  update(id: number, entity: T): T | undefined;
  delete(id: number): void;
}

class GenericRepository<T extends { id: number }>
  implements Repository<T> {

  private entities: T[] = [];

  create(entity: T): T {
    this.entities.push(entity);
    return entity;
  }

  findById(id: number): T | undefined {
    return this.entities.find(entity => entity.id === id);
  }

  findAll(): T[] {
    return this.entities;
  }

  update(id: number, entity: T): T | undefined {
    const index = this.entities.findIndex(
      existing => existing.id === id
    );

    if (index == -1) {
      return undefined;
    }

    this.entities[index] = entity;
    return entity;
  }

  delete(id: number): void {
    this.entities = this.entities.filter(
      entity => entity.id !== id
    );
  }
}

// Student repository
const studentRepository = new GenericRepository<Student>();

studentRepository.create({
  id: 1,
  name: "Alice",
  age: 20
});

// Product repository
const productRepository = new GenericRepository<Product>();

productRepository.create({
  id: 1,
  name: "Laptop",
  price: 1500
});

// Course repository
const courseRepository = new GenericRepository<Course>();

courseRepository.create({
  id: 1,
  title: "TypeScript",
  duration: 8
});

// correct

//6
interface Stack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

class GenericStack<T> implements Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}

// Number stack
const numbers = new GenericStack<number>();

numbers.push(10);
numbers.push(20);
numbers.push(30);

console.log(numbers.peek()); // 30
console.log(numbers.pop());  // 30
console.log(numbers.size()); // 2


// String stack
const names = new GenericStack<string>();

names.push("John");
names.push("Jane");

console.log(names.pop());


// Object stack
interface Task {
  id: number;
  title: string;
}

const tasks = new GenericStack<Task>();

tasks.push({
  id: 1,
  title: "Learn TypeScript"
});

console.log(tasks.peek());

// correct

//7
interface SortableItem {
  sortValue: string | number;
}

function sortItems<T extends SortableItem>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    if (a.sortValue < b.sortValue) {
      return -1;
    }

    if (a.sortValue > b.sortValue) {
      return 1;
    }

    return 0;
  });
}

//
// interface Student extends SortableItem {
//   id: number;
//   name: string;
//   sortValue: string;
// }

// correct

