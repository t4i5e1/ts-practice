//型エイリアスを使ったオブジェクト型の定義
type Book = {
    title: string;
    author: string;
    publishdIn: number;
};

const book: Book = {
    title: "こころ",
    author: "夏目漱石",
    publishdIn: 1914,
}
console.log(book);
