/**
 * TypeScript Keyof
 * keyof is a keyword in TypeScript which is used to extract the key type from an object type.
 * keyof with explicit keys
When used on an object type with explicit keys, keyof creates a union type with those keys.
 */

interface Person {
  name: string;
  age: number;
}
// paramter: "name" | "age"
const printPerson = (person: Person, parameter: keyof Person) => {
    console.log(`${person[parameter]}`)
}

printPerson({name: "gerald", age: 4}, "name")


/***
 * keyof with index signatures
keyof can also be used with index signatures to extract the index type.
 */

type mapType = {
    [key: string]: unknown,
}


const printMap = (property: keyof mapType, value: string) => {
    console.log({[property]: value})
}
printMap("name", "gerald");