// Unary Operators begins here
// let a = 8;
// let b = 7;

// console.log("a = ", a, ",b = ", b);
// //a = a + 1; // first method
// a++; // second method
// console.log("a = ", a);

// ends here

// This is assignment question

// write a code which can give grades to students according to their scores ?
// 80-100, A
//70-79, B
//60-69, C
//50-59, D
// 34-49, E
// 0-33, Fail


let score = prompt("enter a score (0-100): ");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";
} else if (score >= 50 && score <= 59) {
    grade = "D";
} else if (score >= 34 && score <= 49) {
    grade = "E";
} else {
    grade = "Fail";
}

console.log("according to your score, your grade was: ", grade);