## Task #1 - Javascript

![task](https://raw.githubusercontent.com/ZaField/WCD03_Assigment1/refs/heads/main/assets/ImageTugas1.png)

This folder contains a collection of Javascript implementation from the Task

**Task Overview**

1. Calculate the area of a rectangle
2. Calculate the diameter, circumference, and area of a circle
3. Find the third angle of a triangle given two angles
4. Calculate the difference between two dates in days
5. Display name initials in uppercase

## 1. Calculate the area of a rectangle
```
function areaOfRectangle(length, width) {
    return length * width;
}
console.log(areaOfRectangle(5, 3));
```

## 2. Calculate the diameter, circumference, and area of a circle
```
function circleCalculations(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    return { diameter, circumference: circumference.toFixed(4), area: area.toFixed(3) };
}
console.log(circleCalculations(5));
```

## 3. Find the third angle of a triangle given two angles
```
function thirdAngle(a, b) {
    return 180 - (a + b);
}
console.log(thirdAngle(80, 65));
```

## 4. Calculate the difference between two dates in days
```
function dateDifference(date1, date2) {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
console.log(dateDifference('2024-03-19', '2024-03-21'));
```

## 5. Display name initials in uppercase
```
function getInitials(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
console.log(getInitials("John Doe"));
```