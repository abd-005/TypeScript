let myString : string = "Programming Hero"
let myNumber : number = 123;
let myBoolean : boolean = true;
let mySymbol : symbol = Symbol();
let myBigInt : bigint = 100n;

const addTow = (a : number, b : number) => {
    return a + b
}


console.log(addTow(10, 20))

// Array and Tuple an readonly modifier

// const array: Array<number> = [12,122,12]
const arr: number[] = [12,122,12]
const arrStr: string[] = ["Hello","It's", "me!"];

// tuple

const MakkahLatLang: readonly[number, number] = [21.4266, 39.8256]

// MakkahLatLang.push(2987) // throw error



