/***
 * 
 */

const greet = (name: string): void => {
    console.log(name);
}

type callbackType = ((name: string) => void);
const salutation = (callback: callbackType, name: string): void => {
    callback(name);
}

salutation(greet, "Gerald");




// optional paramters
const add = (num1: number, num2?: number) => {
    if (num2) (
        console.log(num1 + num2)
    )

}

add(2); // no ouput

add(2, 3) // 5

const sub = (num1: number, num2: number = 5) => {
    console.log(num1 + num2)
}

sub(3) // 8

sub(3, 2) // 5