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