//1 FUNCTION RETURNING AN OBJECT
function getStudent(name: string, score: number) {
  return {
    name,
    score,
    passed: score >= 50,
  };
}


// Example
const student = getStudent("Alice", 75);
console.log(student);
// correct


//2 ARROW FUNCTION WITH UNION TYPES
const processValue = (value: number | string): number | string => {
  if (typeof value === "number") {
    return value * value;
  } else {
    return value.toUpperCase();
  }
};

// Examples
console.log(processValue(6));        // 36
console.log(processValue("hello"));  // HELLO
// correct 


//3 TYPE CASTING
let data: unknown = "TypeScript";

let text = data as string;

console.log(text.length);
// correct

//4 DOM ELEMENT CASTING
const input = document.getElementById("myInput") as HTMLInputElement;

input.value = "TypeScript";

// correct


//5 CASTING JSON DATA
interface User {
  name: string;
  age: number;
}

const jsonString = '{"name":"John","age":25}';

const user = JSON.parse(jsonString) as User;

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);

// correct