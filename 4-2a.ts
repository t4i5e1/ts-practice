class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(greeting: string): void {
        console.log(
            `${greeting}, my name is ${this.name} and Im ${this.age} years old.`
        );
    }
}
const miko = new Person("Sakura Miko", 18);
miko.greet("NYA HELLO");
