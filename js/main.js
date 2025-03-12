// 1. Find area of rectangle
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(5, 3));

// 2. Find diameter, circumference, and area of a circle
function circleCalculations(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    return { diameter, circumference: circumference.toFixed(4), area: area.toFixed(3) };
}
console.log(circleCalculations(5));

// 3. Find third angle of a triangle if two angles are given
function thirdAngle(a, b) {
    return 180 - (a + b);
}
console.log(thirdAngle(80, 65));

// 4. Get difference between two dates in days
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log(dateDifference('2024-03-19', '2024-03-21'));

// 5. Print name initials in uppercase
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("John Doe"));
