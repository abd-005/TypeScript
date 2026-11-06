//* type alias vs interface

//? Interface is generally connected to object
//? type alias is more connected to literals, union, tuple, primitives


//  TODO: type alias

type id = number

//! interface id = number

type role = "admin" | 'manager'

//! interface "admin" | 'manager'


// TODO: Interface

interface User {
    id: number,
    name: string,
    role: 'admin' | 'manager'
}

const user: User = {
    id: 10,
    name: "abc",
    role: "admin",
}


// Inheritance 

interface Animal {
    species: string;
}

interface Cat extends Animal {
    breed: string;
}

const cat: Cat = {
    breed: "persian",
    species: "Felix Catus"
}

//? how to inherit with type alias

type Vehicle = {
    //? "&" symbol is used to perform intersection
    brand: string;
}

type Car = Vehicle & {
    model: string 
}

const car : Car = {
    model: "Corolla",
    brand: "Toyota"
}


//? what if redeclared

interface IEmployee {
    id: number
}

interface IEmployee {
    name: string
}

type TEmployee = {
    id: number
}

//! this is not valid 
// type TEmployee = {
//     name: string
// }

const employee: IEmployee = {
    id: 20,
    name: 'abc'
}