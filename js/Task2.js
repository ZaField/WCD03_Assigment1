function circleCalculations(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    return { diameter, circumference: circumference.toFixed(4), area: area.toFixed(3) };
}
console.log(circleCalculations(5));