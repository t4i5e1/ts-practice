type Person = {
    name: string;
    age: number;
};
const alice = {
    name: "Alice",
    age: 30,
    gender: "F"
};
const aliceAsPerson: Person = alice;

console.log(alice);
