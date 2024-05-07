//オーバーロードのシグネチャ
function addNumber(a: number, b: number): number;
function addNumber(a: string, b: string): string;
function addNumber(a: number, b: string): string;
function addNumber(a: string, b: number): string;

//関数本体
function addNumber(a: number | string, b: number | String) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }else{
    return  a.toString() + b.toString();
    }
}

let result = addNumber("1", "2");

result.includes("1");
