//* Top types

let helloWorld : any = "hello world"
helloWorld = 123

helloWorld.length;

const something: unknown = "Hello Coders!"

// something.length //! will throw error


//* Core Types

let something2 : unknown;

const num: number = 128;

console.log(something2 = num)

type Status = 'pending' | 'success'

let someStatus = 'string'

let status: Status = "pending";

someStatus = status;

// status = someStatus //! throws error 


//* Nullish Types

interface User {
    name: string;
}

type LoggedInUser = User | null;

const currentUser: LoggedInUser = null;


//* Unit Types

const greet = () => {
    console.log("hello world")
}

// const greetings: string = greet(); //! greet is void; void not assignable to string/core types 

//* Sud-type of unit type

const anotherGreet = (): undefined => {
    console.log("hello World!!")
    return undefined;
}

const greetings = anotherGreet();
console.log(greetings)


//* Bottom types

const getError = (msg: string) => {
    throw new Error(msg)
}

const x: null = getError("abc")
const x1: string = getError("abc")
const x2: void = getError("abc")
const x3: undefined = getError("abc")
const x4: any = getError("abc")
const x5: unknown = getError("abc")