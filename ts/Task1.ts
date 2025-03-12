type NumberFunction = (length: number, width: number) => number;
const areaOfRectangleTS: NumberFunction = (length, width) => length * width;
console.log(areaOfRectangleTS(5, 3));