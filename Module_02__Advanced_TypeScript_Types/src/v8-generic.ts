//* Generic function

const wrapInArray = <T> (value: T) => {
    return [value]
}

const strArr = wrapInArray("abc")
const numArr = wrapInArray(123)

strArr.map((char) => {char.toUpperCase()})
// numArr.map((item) => {item.toUpperCase()}) //! throws err; cause item is dynamically assigned number type due to generic type


//* Generic interface

interface User {
    name: string,
    role: string,
}

interface Blog {
    name: string,
    role: string,
    date: string,
}

interface ApiResponse<T> {
    data: T,
    success: boolean,
    statusCode: number,
}

// type UserResponse = ApiResponse<User>
// type BlogResponse = ApiResponse<Blog>

// const userRes: UserResponse = {
const userRes: ApiResponse<User> = {
    data: {
        name: 'abc',
        role: 'xyz',
    },
    success: true,
    statusCode: 200,
} 