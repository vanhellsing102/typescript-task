{






type User = {
    name: string;
    age: number;
    role: "user" | "admin" | "guest";
}
const users: User[] = [
    {name: "murad", age: 21, role: "admin"},
    {name: "raja", age: 24, role: "user"},
    {name: "mehedi", age: 26, role: "guest"},
    {name: "milon", age: 12, role: "guest"},
    {name: "ashik", age: 2, role: "user"},
]
const checkRole = (users: User[]) =>{
    const groupRole: {admin: User[], user: User[], guest: User[]} = {
        admin: [],
        user: [],
        guest: []
    }
    users.forEach((user) =>{
        groupRole[user.role].push(user);
    })
    return groupRole;
}
const result = checkRole(users);
console.log(result);








}