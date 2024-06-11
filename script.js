// Lesson 1: Assignments | JavaScript Basics and Syntax

// Understanding Data Types in JavaScript

// Problem Statement: Imagine you are developing a student management system for a school. Your task is to create a JavaScript 
// program that declares variables to store information about students, such as their names, ages, grades, and attendance status.

// Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
// Task 2: Assign sample values to the student information variables.
// Task 3: Display the student information using console.log() statements.

// Expected Outcomes:

// After completing Task 1, students should understand how to declare variables with different data types in JavaScript.
// After completing Task 2, students should be able to assign values to variables of various data types.
// After completing Task 3, students should be able to display variable values using console.log() statements.

// Student 1:

let studentName = 'Stephen';
let studentAge = 25;
let studentGrade = 'A';
let studentAttendance = 'Present';
console.log(studentName, studentAge, studentGrade, studentAttendance)
// or object representation:
let studentData = {
    studentName: 'Stephen',
    studentAge: 25,
    studentGrade: 'A',
    studentAttendance: 'Present'
};
console.log(studentData)

// Student 2:

let student2Name = 'Caitlyn';
let student2Age = 21;
let student2Grade = 'B';
let student2Attendance = 'Absent';
console.log(student2Name, student2Age, student2Grade, student2Attendance)
// or object representation:
let student2Data = {
    studentName: 'Caitlyn',
    studentAge: 21,
    studentGrade: 'B',
    studentAttendance: 'Absent'
};
console.log(student2Data)


// Exploring JavaScript Operators

// Problem Statement: You are tasked with developing a simple calculator program in JavaScript. Your program should be able to perform 
// basic arithmetic operations such as addition, subtraction, multiplication, and division.

// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
// Task 2: Assign sample numeric values to the variables declared in Task 1.

const x = 8;
const y = 4;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.

const sum = x + y;
const diff = x - y;
const product = x * y;
const quot = x / y;

console.log("Sum:", sum);
console.log("Difference:", diff);
console.log("Product:", product);
console.log("Quotient:", quot);

// or:

function sumNumbers(x, y) {
    return x + y;
}

function differenceNumbers(x, y) {
    return x - y;
}

function productNumbers(x, y) {
    return x * y;
}

function quotNumbers(x, y) {
    return x / y;
}

console.log("Sum:", sumNumbers(x, y));
console.log("Difference:", differenceNumbers(x, y));
console.log("Product:", productNumbers(x, y));
console.log("Quotient:", quotNumbers(x, y));


// Task 4: Explore assignment operators and update the values of variables.

let num1 = -2;
let num2 = 4;
num1 += 2;
num2 **= 2 - num1;

console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators to compare the values of variables.

console.log("Is num1 equal to num2?", num1 == num2); // === if equal value and equal type
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 != num2); // !== not equal value or not equal type

// Task 6: Apply logical operators to combine conditions and display the results.

let isPositive = (num1 > 0 && num2 > 0);
let isEven = (num1 % 2 == 0 || num2 % 2 == 0);
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);