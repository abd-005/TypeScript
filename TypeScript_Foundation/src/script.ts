//* Data Types

let myString: string = "Programming Hero";
let myNumber: number = 123;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 100n;

const addTow = (a: number, b: number) => {
  return a + b;
};

// console.log(addTow(10, 20))

//* Array and Tuple an readonly modifier

// const array: Array<number> = [12,122,12]
const arr: number[] = [12, 122, 12];
const arrStr: string[] = ["Hello", "It's", "me!"];

// tuple

const MakkahLatLang: readonly [number, number] = [21.4266, 39.8256];

// MakkahLatLang.push(2987) // throws error

//* Optional, Default parameters

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }

  return firstName + " " + lastName;
};

console.log(concatName("Abdul"));

const greetings = (fullName: string, greeting?: string) => {
  //try not to make default the first parameter
  console.log(greeting + " " + fullName);
};

greetings("Abdul Ahad");


//* rest parameter (...args)

const add = (a: number, b: number, ...rest: number[]) => {
  return a + b + rest.reduce((p, q) => p + q, 0)
}
add(10,20, 30, 40, 50);


const sum = (...numbers : number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0) 
}
sum(1,2,3,4,5,6,7,8,9)


// ---

const logUserAction = (...args: [name: string, age: number, isActive: boolean]) => {
  const [name, age] = args;
  console.log(name, "is", age, "years old.")

}

logUserAction("Human", 23, true)
