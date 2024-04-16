const person = {
    name: "Alice",
    age: 30,
}
console.log(person.address);
//TSError: ⨯ Unable to compile TypeScript:
//3-5a.ts:5:20 - error TS2339: Property 'address' does not exist on type '{ name: string; age: number; }'.
//personオブジェクトにaddressプロパティが含まれていないためエラーが発生する↑
