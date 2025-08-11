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