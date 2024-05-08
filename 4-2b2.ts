class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let miko: Person;
miko = {
    name: "Sakura Miko",
    age: 18
}
//genderがPersonに含まれていないからエラーを返すケース
//miko.gender = "F";
