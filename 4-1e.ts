interface Born {
    birthYear: number;
    place: string;
}
interface Hobby {
    hobbies: string[];
}
//複数のインターフェイスを拡張
interface Person extends Born, Hobby {
    name: string;
}
const mike: Person = {
    birthYear: 1995,
    place: "New York",
    hobbies: ["tennis", "cooking", "chess"],
    name: "Mike"
};
