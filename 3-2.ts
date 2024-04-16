let age: number;

const adultAge = 18;
age = adultAge;
//3行目で、aduilAgeをnumber型としてではなく、18のみ取りうるリテラル型として推論
//しかし、4行目でnumber型の変数に代入可能としている
let adultAge: 18;
adultAge = 20;
//7行目ではリテラル型として推論されるため、8行目の20を割り当てることは出来なくなる
