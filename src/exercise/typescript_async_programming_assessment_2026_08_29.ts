class ApiError extends Error {
  statusCode: number;   
  errorCode: string;

  constructor(statusCode: number, errorCode: string, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;

    Object.setPrototypeOf(this, ApiError.prototype);

  }
}

function fetchUserData(userId: number): {id: number; name: string } {
    if (userId === 0) {
        throw new ApiError(404, "NOT_FOUND", "User not found");
    }

    return { id: userId, name: "John Doe" };
}

try {
    const user = fetchUserData(0);
    console.log("User data:", user);
} catch (error: unknown) {
    if (error instanceof ApiError) {
        console.log("404: User not found");
    } else if (error instanceof ApiError && error.statusCode === 401) {
        console.log("401: Unauthorized.");
    } else {
        console.error(`API error:, ${error instanceof Error ? error.message : "Unknown error"}`);
    }
}

 //2
 class oprationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "OperationError";

        Object.setPrototypeOf(this, oprationError.prototype);
    }
}

type user = {
    id: number;
    name: string;
};

type AsyncCallback = (error: Error | null, result: user) => void;

function asyncOperation(shouldFail: boolean, callback: AsyncCallback): void {
    setTimeout(() => {
        if (shouldFail) {
            const error = new oprationError("Operation failed");
            callback(new oprationError("Operation failed"), null as any);
        } else {
            callback(null, { id: 1, name: "Alice" });
        }
    }, 2000); }

    asyncOperation(false, (error, result) => {
        if (error) {
            console.error("Error:", error.message);
            return;
        }
        console.log("User:", result);
    });

    asyncOperation(true, (error, result) => {
        if (error) {
            console.error("Error:", error.message);
            return;
        }
        console.log("User:", result);
    });


//3
interface User {
  id: number;
  name: string;
  email: string;
}

class UserServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserServiceError";
  }
}

const users: User[] = [
  {
    id: 1,
    name: "Abdul",
    email: "abdul@example.com",
  },
  {
    id: 2,
    name: "John",
    email: "john@example.com",
  },
];

// Get user by ID
function getUserById(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);

      if (!user) {
        reject(new UserServiceError("User not found"));
        return;
      }

      resolve(user);
    }, 1000);
  });
}

// Create user
function createUser(name: string, email: string): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name || !email) {
        reject(new UserServiceError("Name and email are required"));
        return;
      }

      const newUser: User = {
        id: users.length + 1,
        name,
        email,
      };

      users.push(newUser);
      resolve(newUser);
    }, 1000);
  });
}

// Update user
function updateUser(
  id: number,
  name: string,
  email: string
): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);

      if (!user) {
        reject(new UserServiceError("User not found"));
        return;
      }

      user.name = name;
      user.email = email;

      resolve(user);
    }, 1000);
  });
}

// Delete user
function deleteUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id === id);

      if (index === -1) {
        reject(new UserServiceError("User not found"));
        return;
      }

      const deletedUser = users.splice(index, 1)[0];

      if (!deletedUser) {
        reject(new UserServiceError("User not found"));
        return;
      }

      resolve(deletedUser);
    }, 1000);
  });
}


// Consume using async/await
async function main(): Promise<void> {
  try {
    const user = await getUserById(1);
    console.log("User:", user);

    const newUser = await createUser(
      "Mike",
      "mike@example.com"
    );
    console.log("Created:", newUser);

    const updatedUser = await updateUser(
      1,
      "Abdul Rahman",
      "abdulrahman@example.com"
    );
    console.log("Updated:", updatedUser);

    const deletedUser = await deleteUser(2);
    console.log("Deleted:", deletedUser);

  } catch (error) {
    if (error instanceof UserServiceError) {
      console.log("Operation failed:", error.message);
    }
  }
}

main();

//4
type ServiceStatus =
  | "online"
  | "offline"
  | "maintenance";

class OfflineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "OfflineError";
  }
}

class MaintenanceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MaintenanceError";
  }
}

function checkServiceStatus(): Promise<ServiceStatus> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const statuses: ServiceStatus[] = [
        "online",
        "offline",
        "maintenance",
      ];

      const randomIndex = Math.floor(
        Math.random() * statuses.length
      );

      const status = statuses[randomIndex]!;

      if (status === "offline") {
        reject(new OfflineError("Service is offline"));
        return;
      }

      if (status === "maintenance") {
        reject(
          new MaintenanceError(
            "Service is currently under maintenance"
          )
        );
        return;
      }

      resolve(status);
    }, 1000);
  });
}


// Consume the Promise
async function check(): Promise<void> {
  try {
    const status = await checkServiceStatus();

    if (status === "online") {
      console.log("Service is online!");
    }

  } catch (error) {
    if (error instanceof OfflineError) {
      console.log("OFFLINE:", error.message);
    } else if (error instanceof MaintenanceError) {
      console.log("MAINTENANCE:", error.message);
    }
  }
}

check();

//5
interface User {
  id: number;
  name: string;
}

interface Order {
  id: number;
  userId: number;
  amount: number;
}

interface UserSummary {
  user: User;
  orderCount: number;
  totalAmountSpent: number;
}


class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

class DatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
  }
}


const summaryUsers: User[] = [
  {
      id: 1,
      name: "Abdul",
      email: ""
  },
  {
      id: 2,
      name: "John",
      email: ""
  },
];

const orders: Order[] = [
  {
    id: 1,
    userId: 1,
    amount: 5000,
  },
  {
    id: 2,
    userId: 1,
    amount: 3000,
  },
  {
    id: 3,
    userId: 2,
    amount: 7000,
  },
];


// Fetch user
function fetchUser(id: number): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = summaryUsers.find(
        (user) => user.id === id
      );

      if (!user) {
        reject(
          new NotFoundError("User does not exist")
        );
        return;
      }

      resolve(user);
    }, 1000);
  });
}


// Fetch orders
function fetchOrders(userId: number): Promise<Order[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userOrders = orders.filter(
        (order) => order.userId === userId
      );

      // Simulate database failure
      if (Math.random() < 0.1) {
        reject(
          new DatabaseError(
            "Failed to fetch orders"
          )
        );
        return;
      }

      resolve(userOrders);
    }, 1000);
  });
}


// Calculate total
function calculateTotal(
  orders: Order[]
): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const total = orders.reduce(
        (sum, order) => sum + order.amount,
        0
      );

      resolve(total);
    }, 500);
  });
}

//6
interface UserRecord {
  id: number;
  name: string;
}

interface ProductRecord {
  id: number;
  name: string;
  price: number;
}

interface OrderRecord {
  id: number;
  amount: number;
}


// Generic callback
type GenericAsyncCallback<T> = (
  error: Error | null,
  result?: T
) => void;


// Generic utility
function executeAsync<T>(
  operation: () => Promise<T>,
  callback: GenericAsyncCallback<T>
): void {

  operation()
    .then((result) => {
      callback(null, result);
    })
    .catch((error: unknown) => {

      if (error instanceof Error) {
        callback(error);
      } else {
        callback(new Error("Unknown error"));
      }

    });
}