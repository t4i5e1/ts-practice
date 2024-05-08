interface Vehicle {
    speed: number;
}

interface Car extends Vehicle {
    engineType: string;
    volume: number;
}

const superCar: Car = {
    speed: 240,
    engineType: "V8",
    volume: 4000,
}
