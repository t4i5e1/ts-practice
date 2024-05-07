interface Point {
    readonly x: number;
    readonly y: number;
}
const point: Point = {x: 10, y: 20};

point.x = 30;
//TSError: ⨯ Unable to compile TypeScript:
//4-1b.ts:7:7 - error TS2540: Cannot assign to 'x' because it is a read-only property.
