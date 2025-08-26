// Strings are immutable in the JavaScript
// Arrays are mutable in the JavaScript

/*
let heroes = ["iron man", "hulk", "captain america", "black panther", "hawkeye", "thor", "loki", "black widow"];

console.log(heroes);

console.log(heroes[0]);
console.log(heroes[1]);
console.log(heroes[2]);
console.log(heroes[3]);
console.log(heroes[4]);
console.log(heroes[5]);
console.log(heroes[6]);
console.log(heroes[7]);
console.log(heroes[8]);
console.log(heroes[9]);
console.log(heroes[10]); 

// looping over an array

let superheroes = ["iron man", "hulk, "captain america", "black panther", "winter soldier", "doctor strange", "vision", "thor", "loki", "black widow"];

for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i]);
}
*/

// For an given array with student marks [85,97,44,37,67,90]. Find the average marks of the entire class

let marks = [85, 97, 44, 37, 67, 90, 73];
let sum = 0;

for (let val of marks) {
    sum += val;
}

console.log("sum of the marks", sum);

let avg = sum/marks.length;
console.log(`avg marks of the entire class = ${avg}`);

// For an given array with piece of items [250,645,300,900,50, 1299]. All items have an offer of 10% OFF on them. 
// Change the array to store the final price after the discount

// first method
items = [250,645,300,900,50,1299];

for (i = 0; i < items.length; i++) {
    let offer = items[i]/10;
    items[i] -= offer; 
}

console.log(`final price after the discount = ${items}`);

// second menthod
items1 = [250,645,300,900,50,1299];

let p=0;

for (let val of items1) {
    let offer = val/10;
    items1[p] = items1[p] - offer;
    console.log(`price after the offer = ${items1[p]}`)
    p++;  
}

// Array Methods
//
// push() = add content to the end
let foodItems1 = ["burger", "pizza", "sandwich", "french fries", "momos", "garlic bread", "paneer popcorns"];
foodItems1.push("tacobells", "chicken rolls");
console.log(foodItems1);

// pop() =  deletes content from the end
let foodItems2 = ["burger", "pizza", "sandwich", "french fries", "momos", "garlic bread", "tacobells", "popcorn"];
let deletedItem = foodItems2.pop();
console.log(foodItems2);
console.log("deleted item ", deletedItem);

// toString = converts array into string
let num = [250, 645, 300, 900, 50, 1299];
console.log(num);
console.log(num.toString());

//
// concat() = combines the strings
// unshift() = adds the content at the beginning
// shift() = deletes the content from the start and return
//
// slice() = returns the piece of array but doesnot change the original array
// splice() = changes the orginal array (add, remove, replace)