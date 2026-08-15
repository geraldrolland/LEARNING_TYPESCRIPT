 
// 1. Partial<T> – Update User Profile


type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type UserUpdate = Partial<User>;

const userUpdate: UserUpdate = {
  name: "John",
  age: 30,
};

// correct

// 2. Required<T> – Complete Product Information

type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
  discount?: number;
};

type CompleteProduct = Required<Product>;

const product: CompleteProduct = {
  id: 1,
  name: "Laptop",
  price: 1200,
  description: "A powerful laptop",
  discount: 10,
};

// correct



// 3. Readonly<T> – Application Configuration


type Config = {
  apiUrl: string;
  port: number;
  environment: string;
  debug: boolean;
};

type ReadonlyConfig = Readonly<Config>;

const config: ReadonlyConfig = {
  apiUrl: "https://api.example.com",
  port: 3000,
  environment: "production",
  debug: false,
};

// correct





// 4. Pick<T, K> – Employee Summary


type Employee = {
  id: number;
  name: string;
  department: string;
  jobTitle: string;
  salary: number;
  email: string;
  yearsOfExperience: number;
};

type EmployeeSummary = Pick<
  Employee,
  "name" | "department" | "jobTitle"
>;

const employeeSummary: EmployeeSummary = {
  name: "Sarah",
  department: "Engineering",
  jobTitle: "Frontend Developer",
};

//correct



// 5. Omit<T, K> – Public User Information


type PrivateUser = {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
};

type PublicUser = Omit<PrivateUser, "password" | "phoneNumber">;

const publicUser: PublicUser = {
  id: 1,
  name: "John",
  email: "john@example.com",
};

// correct



// 6. Record<K, T> – Product Inventory

type ProductCategory =
  | "electronics"
  | "clothing"
  | "books"
  | "food";

type Inventory = Record<ProductCategory, number>;

const inventory: Inventory = {
  electronics: 50,
  clothing: 100,
  books: 75,
  food: 200,
};

// correct

// 7. Exclude<T, U> – Permission System

type Permission =
  | "read"
  | "write"
  | "delete"
  | "admin"
  | "guest";

type RegularPermission = Exclude<
  Permission,
  "admin" | "guest"
>;

const permission: RegularPermission = "read";

// correct

// 8. Extract<T, U> – Supported Events

type Event =
  | "mouseClick"
  | "mouseMove"
  | "mouseDown"
  | "keyDown"
  | "keyUp"
  | "keyPress"
  | "appStart"
  | "appShutdown";

type KeyboardEvent = Extract<
  Event,
  `key${string}`
>;

const keyboardEvent: KeyboardEvent = "keyDown";

// correct


// 9. NonNullable<T> – API Response Data


type ApiResponse = {
  id: number | null;
  name: string | null | undefined;
  email: string | null;
  data: {
    token: string;
  } | null | undefined;
};

type UserName = NonNullable<ApiResponse["name"]>;

type UserData = NonNullable<ApiResponse["data"]>;

const userName: UserName = "John";

const userData: UserData = {
  token: "abc123",
};

// correct


// 10. ReturnType<T> – Service Functions


function fetchUsers() {
  return [
    {
      id: 1,
      name: "John",
      email: "john@example.com",
    },
  ];
}

function createProduct() {
  return {
    id: 101,
    name: "Laptop",
    price: 1200,
  };
}

function retrieveOrders() {
  return [
    {
      id: 1,
      product: "Laptop",
      quantity: 2,
    },
  ];
}

type UsersResult = ReturnType<typeof fetchUsers>;
type ProductResult = ReturnType<typeof createProduct>;
type OrdersResult = ReturnType<typeof retrieveOrders>;

const users: UsersResult = fetchUsers();

const newProduct: ProductResult = createProduct();

const orders: OrdersResult = retrieveOrders();

// correct


// 11. Parameters<T> – Function Arguments

function updateUser(
  userId: number,
  role: string,
  isActive: boolean
) {
  console.log(userId, role, isActive);
}

type UpdateUserParameters = Parameters<typeof updateUser>;

function logUserUpdate(
  ...args: UpdateUserParameters
) {
  const [userId, role, isActive] = args;

  console.log(
    `User ${userId} updated: ${role}, active: ${isActive}`
  );
}

logUserUpdate(1, "admin", true);

// correct



// 12. ConstructorParameters<T> + InstanceType<T>
//     – Class Factory


class DatabaseConnection {
  constructor(
    public host: string,
    public port: number,
    public database: string
  ) {}

  connect() {
    console.log(
      `Connecting to ${this.host}:${this.port}/${this.database}`
    );
  }
}

// Gets the constructor's parameter tuple:
// [host: string, port: number, database: string]
type DatabaseConstructorParams =
  ConstructorParameters<typeof DatabaseConnection>;

// Gets the instance type of the class:
// DatabaseConnection
type DatabaseConnectionInstance =
  InstanceType<typeof DatabaseConnection>;


function createDatabaseConnection(
  ...args: DatabaseConstructorParams
): DatabaseConnectionInstance {
  return new DatabaseConnection(...args);
}

const db = createDatabaseConnection(
  "localhost",
  5432,
  "my_database"
);

db.connect();

// correct
