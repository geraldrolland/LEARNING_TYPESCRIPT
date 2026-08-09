//1 Basic Function
function addNumbers( num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNumbers(10, 20));

// correct

//2 Optional parameter
function greetUser(name: string, title?: string): string {
    if (title) {
    return `Hello, ${title} ${name}!`;
    }
    return `Hello ${name}!`;
}
console.log(greetUser("jack"));
console.log(greetUser("jack", "Mr"));
// correct

//3 Default Parameter
function calculateTotal(price: number, taxRate: number = 0.07):
number{
    return price + (price * taxRate);
}
console.log(calculateTotal(100));
console.log(calculateTotal(100, 0.1));

// correct

