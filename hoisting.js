// Assignment: JavaScript Hoisting

// Objectives:
// Practice reading JavaScript the same way as the interpreter reads it.

// Rewrite the code the way it would be seen by the interpreter and predict the output. An example is shown here:

// GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// After you've made your prediction, run the original code to find out if you were right! If your predictions were incorrect, look back at how the code is hoisted by the interpreter.

// Note
// Run the same code as above with ES6 syntax and compare your results:

// console.log(example);
// let example = "I'm the example!";    

// Even if let and const prevent a lot of the confusing behavior of JavaScript's hoisting, these are ES6 constructs and a huge amount of the world's live JavaScript code is still ES5. Understanding how ES5 hoists var and the rules of scoping are important for every JavaScript developer!

// 1.
// console.log(hello);                                   
// var hello = 'world';   

// Predict: undefined / change to let instead of var - error
// Answer: undefined / error - cannot access "hello" before initialization at Object

// 2.
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// Predict: magnet / change to let instead of var - magnet
// Answer: undefined / magnet

// 3.
// let brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// Predict: undefined, super cool / change to let instead of var - super cool
// Answer: super cool / super cool

// 4.
// let food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     let food = 'gone';
// }

// Predict: chicken, half-chicken / change to let instead of var - error
// Answer: chicken, half-chicken / error - cannot access "food" before initialization at eat at Object

// 5.
// mean();
// console.log(food);
// let mean = function() {
//     food = "chicken";
//     console.log(food);
//     let food = "fish";
//     console.log(food);
// }
// console.log(food);

// Predict: error / change to let instead of var - error
// Answer: mean is not a function at Object / error - Cannot access 'mean' before initialization at Object

// 6.
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

// Predict: undefined, rock, r&b, disco / change to let instead of var - error
// Answer: undefined, rock, r&b, disco / error - cannot access "genre" before initialization at Object

// 7.
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// Predict: san jose, seattle, burbank, san jose / change to let instead of var - error
// Answer: san jose, seattle, burbank, san jose / error - cannot access "dojo" before initialization at learn at Object

// 8. Bonus - ES6: Const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// Predict: const - {name: 'Chicago', students: 65, hiring: true}, error / let - {name: 'Chicago', students: 65, hiring: true}, closed for now
// Answer: const -  {name: 'Chicago', students: 65, hiring: true},  / let - {name: 'Chicago', students: 65, hiring: true}, closed for now