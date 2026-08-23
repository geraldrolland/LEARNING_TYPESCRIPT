//1
type User = {
  id: number;
  username: string;
  email: string;
  age: number;
};

type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

type OptionalUser = MyPartial<User>;

// Any combination is allowed
const user1: OptionalUser = {};

const user2: OptionalUser = {
  username: "john",
};

const user3: OptionalUser = {
  id: 1,
  email: "john@example.com",
  age: 25,
};

const user4: OptionalUser = {
  id: 1,
  username: "john",
  email: "john@example.com",
  age: 25,
};


//2
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
};

type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

type ReadonlyProduct = MyReadonly<Product>;

const product: ReadonlyProduct = {
  id: 1,
  name: "Laptop",
  price: 1200,
  category: "Electronics",
  inStock: true,
};

//3
type AppSettings = {
  darkMode: boolean;
  notifications: boolean;
  autoSave: boolean;
  sound: boolean;
};

type BooleanProperties<T> = {
  [K in keyof T]: boolean;
};

type BooleanSettings = BooleanProperties<AppSettings>;

const settings: BooleanSettings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  sound: false,
};

type Example = BooleanProperties<{
  username: string;
  age: number;
  isAdmin: boolean;
}>;

//4
type Profile = {
  name: string;
  age: number;
  email: string;
  isVerified: boolean;
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableProfile = Nullable<Profile>;

const profile: NullableProfile = {
  name: "John",
  age: null,
  email: "john@example.com",
  isVerified: null,
};

//5
type User1 = {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type UserUpdate<T> = {
  [K in keyof T as K extends "id" | "createdAt" | "updatedAt"
    ? never
    : K]?: T[K];
};

type UserUpdateRequest = UserUpdate<User>;

//6
type Data = {
  name: string;
  age: number;
  isAdmin: boolean;
  email: string;
  score: number;
};

type ToArray<T> = {
  [K in keyof T]:
    T[K] extends string ? string[] :
    T[K] extends number ? number[] :
    T[K] extends boolean ? boolean[] :
    T[K];
};

type ArrayData = ToArray<Data>;