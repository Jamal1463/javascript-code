// write a script to print even numbers from 1 to 100

let i = 0;

for (i=0; i<=50; i++) {
    if (i%2 === 0) {
        console.log("i =", i);
    }
}
//
//
//
// while loop: Code will not execute if the given/defined condition is not correct.
// Print num from 1 to 20 using while loop

let num = 1;
while (num <= 20) {
    console.log("given output is = ", num);
    num++;
}
//
//
// do-while loop: Code will get executed atleast once irrespective of the condition
// Print num from 2 to 22

let n = 2;
do {
    console.log("number's are printed = ", n);
    n++;
}while(n >= 22);
//
//
//
// for-of loop: It is used to loop strings or arrays

let string = "Avenger's Infinity War";
let stringLength = string.length;
for (let val of string) {
    console.log("val of str's printed are = ", val);
}
console.log("length of the string printed above is = ", stringLength);
//
//
//
//
// for-in loop: This is used for objects or arrays

let student = {
    fullName: "John Wick",
    age: 21,
    cgpa: 9.8,
    isPass: true,
    dreamJob: "Elite Sniper",
};

for (let key in student) {
    console.log("key = ", key, "& value = ", student[key]);
}