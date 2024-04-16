//ユニオン型について
let id: number | string;
//ok
id = 10; //number型は代入可能
id = "10"; //string型は代入可能

//error
id = true; //boolean型は代入不可能、1行目でboolean型を含んだユニオン型の宣言をしていないため
