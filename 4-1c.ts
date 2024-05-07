interface Product {
    [key: `product_${number}`]: string;
}

const productA: Product = {
    product_1: "foo",
    product_2: "bar",
    product_3: "baz",
};

const productB: Product = {
    product_1: "foo",
    product_2: "bar",
    product_dx: "baz"
};
//TSError: ⨯ Unable to compile TypeScript:
//4-1c.ts:14:5 - error TS2353: Object literal may only specify known properties, and 'product_dx' does not exist in type 'Product'.
