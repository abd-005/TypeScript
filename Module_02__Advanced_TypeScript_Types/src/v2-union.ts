//* Literal type

type City = "Dhaka";
const city: City = "Dhaka";

//* Basic union

type Identity = string | number;
const id: Identity = "string"; // any number is assignable like, 123

//* Literal union

type Role = "admin" | "manager" | "user";
const userRole: Role = "admin"; // also assignable 'manager' or 'user' only

//* Object union

type Admin = { id: number; role: "admin"; privileges: string[] };
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

// const user: User = {id: 10, role: "member", plans: ["hello", "world"]}
const user: User = { id: 10, role: "admin", privileges: ["hello", "users"] };
