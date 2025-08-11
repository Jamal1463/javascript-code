let str = "Chris Hemsworth";
console.log("str length = ", str.length);
console.log("string indices = ", str[3], str[7], str[10], str[13]);

// Template literals
let object = {
    actorName: "Chris Hemsworth",
    age: 52,
    netWorth: 130 ,
    height: 1.92,
}
//
let output = `the networth of ${object.actorName} is ${object.netWorth} USD million`;
//
console.log(output);

// string methods: These are built-in functions to manipulate a string
// str.toUpperCase()
// str.toLowerCase()
// str.trim() --> to remove white spaces

let strName = "     Pirates of the Carribean   ";

console.log(strName.toUpperCase());
console.log(strName.toLowerCase());
console.log(strName.trim());

// \n --> print's the o/p in the nextline
// \t --> gives the tab space
let strgName = "Pirates \n of the \t Carribean";
console.log(strgName);