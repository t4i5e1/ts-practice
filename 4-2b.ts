class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let miko: Person;
miko = new Person("Sakura Miko", 18);

//NG例
//miko = "Sakura Miko";
//Type 'string' is not assignable to type 'Person'.
