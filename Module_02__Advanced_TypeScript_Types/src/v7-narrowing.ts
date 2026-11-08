//* "typeof"

let x = 123

console.log(typeof x);


//* Type Guard

const print = (value: number | string) => {
    if(typeof value === 'string'){
        console.log(value.toUpperCase());
    } else {
        return value;
    }
}


//* Truthiness

type User = {
    name: string,
    address?: {
        street: string,
    }
}

const user: User = {
    name: "abc",
    address: {
        street: "kjas",
    }
}

const showUser = (user: User) => {
    if(user && user.address){
        console.log(user.address.street)
        return
    }

    throw new Error("User not human!")
}


//* some caveat of Type Guard

const printAll = (x: string | string[] | null) => {
    if(x && typeof x === "object"){
        for(let str of x){
            console.log(str)
        }
    } else if (typeof x === "string"){
        console.log(x)
    } else {
        console.log("");
        
    }
}

printAll('')


//* Equality

const printNum = (x: string | number, y: number | boolean) => {
    if(x === y){
        console.log(x, y);
        
    }
}


const printAllEquality = (x: string | string[] | null) => {
    if(x !== null){
        if(typeof x === "object"){
            for(let str of x){
                console.log(str)
            }
            return
        }
        return console.log(x);
        
    }
    console.log('')
}

printAllEquality(["hello", "world"])
printAllEquality("hey coder!")
printAllEquality(null)


//* "in" operator

type Bird = {fly: () => void }
interface Fish {swim: () => void}

const move = (Animal : Bird | Fish) => {
    if("fly" in Animal){
        Animal.fly()
        return
    }

    Animal.swim()

}


//* "instanceof" check

const date = new Date();
const err = new Error("Something went wrong!");

console.log(date instanceof Date);
console.log(err instanceof Error);


const showDate = (x: Date | string) => {
    if(x instanceof Date){
        console.log(x.toISOString());
        return
    } else {
        const date = new Date(x)
        console.log(date.toISOString());
    }
}

showDate(new Date("12-16-1971"))
showDate("12-16-1971")


//* Discriminated union

interface Circle {
    kind: "circle",
    radius: number,
}

interface Square {
    kind: "square",
    sideLength: number,
}

const getArea = (shape: Circle | Square) => {
    if(shape.kind === "circle"){
        console.log(shape.radius);
        return
    } else {
        console.log(shape.sideLength);
    }
}
