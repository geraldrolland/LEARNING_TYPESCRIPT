type Describe<T> =
  T extends string ? "string" :
  T extends number ? "number" :
  T extends boolean ? "boolean" :
  "other";

type Result1 = Describe<string | number | boolean>;
// "string" | "number" | "boolean"

//2
type OnlyStrings<T> =
  T extends string ? T : never;

type Result = OnlyStrings<string | number | boolean>;
// string

//3
type MyNonNullable<T> =
  T extends null | undefined ? never : T;

type Result3 = MyNonNullable<
  string | number | null | undefined
>;

// string | number

//4
type DescribeType<T> =
  T extends string
    ? {
        value: T;
        category: "string";
        primitive: true;
      }
    : T extends number
    ? {
        value: T;
        category: "number";
        primitive: true;
      }
    : T extends boolean
    ? {
        value: T;
        category: "boolean";
        primitive: true;
      }
    : {
        value: T;
        category: "object";
        primitive: false;
      };

type Input =
  | string
  | number
  | boolean
  | { name: string };

type Result5 = DescribeType<Input>;

//5
type Person = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
};

type EventNames<T> = {
  [K in keyof T]: `${K & string}Changed`;
}[keyof T];

type Result6 = EventNames<Person>;

//6
type Person1 = {
  name: string;
  age: number;
  email: string;
};

type GetterNames<T> = {
  [K in keyof T]: `get${Capitalize<K & string>}`;
}[keyof T];

type Result7 = GetterNames<Person>;

//7
type Resources = "User" | "Product" | "Order";

type Methods =
  | "get"
  | "create"
  | "update"
  | "delete";

type RESTMethods =
  `${Methods}${Resources}`;

type Result8 = RESTMethods;

type ExtractResource<T> =
  T extends `${infer Resource}Created`
    ? Resource
    : T extends `${infer Resource}Deleted`
    ? Resource
    : never;

type Events =
  | "userCreated"
  | "userDeleted"
  | "productCreated"
  | "productDeleted";

type Result9 = ExtractResource<Events>;

//8
type ExtractResource1<T> =
  T extends `${infer Resource}Created`
    ? Resource
    : T extends `${infer Resource}Deleted`
    ? Resource
    : never;

type Events1 =
  | "userCreated"
  | "userDeleted"
  | "productCreated"
  | "productDeleted";

type Result31 = ExtractResource<Events>;

//9
type ExtractParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractParams<Rest>
    : T extends `${string}:${infer Param}`
    ? Param
    : never;

type Route =
  "/users/:id/posts/:postId";

type Result11 = ExtractParams<Route>;

//10
type Events11 = {
  user: {
    created: {
      id: number;
    };

    deleted: {
      id: number;
    };
  };

  order: {
    created: {
      id: number;
    };

    cancelled: {
      id: number;
    };
  };
};