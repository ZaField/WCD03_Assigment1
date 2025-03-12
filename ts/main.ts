// 1. Find area of rectangle
type NumberFunction = (length: number, width: number) => number;
const areaOfRectangleTS: NumberFunction = (length, width) => length * width;
console.log(areaOfRectangleTS(5, 3));

// 2. Find diameter, circumference, and area of a circle
interface CircleValues {
    diameter: number;
    circumference: string;
    area: string;
}
const circleCalculationsTS = (radius: number): CircleValues => {
    let diameter = 2 * radius;
    let circumference = (2 * Math.PI * radius).toFixed(4);
    let area = (Math.PI * radius * radius).toFixed(3);
    return { diameter, circumference, area };
};
console.log(circleCalculationsTS(5));

// 3. Find third angle of a triangle if two angles are given
const thirdAngleTS = (a: number, b: number): number => 180 - (a + b);
console.log(thirdAngleTS(80, 65));

// 4. Get difference between two dates in days
const dateDifferenceTS = (date1: string, date2: string): number => {
    let d1: Date = new Date(date1);
    let d2: Date = new Date(date2);
    let diffTime: number = Math.abs(d2.getTime() - d1.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
console.log(dateDifferenceTS('2024-03-19', '2024-03-21'));

// 5. Print name initials in uppercase
const getInitialsTS = (name: string): string =>
    name.split(' ').map(word => word[0].toUpperCase()).join('');
console.log(getInitialsTS("John Doe"));
