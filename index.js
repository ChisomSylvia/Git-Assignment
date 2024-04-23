// String Methods Examples
let myName = "Chisom Obi";
console.log(myName.length);

let state = "Anambra, Enugu, Ebonyi, Abia, Imo";
console.log(state.slice(9))
console.log(state.slice(9, 14))

const firstName = "Chisom, Praise, Joyce";
console.log(firstName.charCodeAt(5));

let hobby = "I love reading, writing and researching";
console.log(hobby.replace("love", "❣️"));

let favFood = "My favourite food is Rice. Rice is easy to prepare and I love taking Rice";
console.log(favFood.replaceAll("Rice", "Pizza"));

const repeat = "pizza";
console.log(repeat.repeat("5"));

//Array Method Examples
const names = ["Smith", "June", "Peter", "Pearl"];
alert(names.pop());

const countries = ["Nigeria", "Salt lake city", "Ghana"];
alert(countries.length);

let veggies = ["Lettuce", "Spinach", "Coriander"];
//let count = veggies.unshift("Cabbage");
alert(veggies.unshift("Cabbage"));
console.log(veggies);

const fruits = ["Appple", "Orange", "Pear"];
console.log(fruits.push("Watermelon"));
console.log(fruits);

const cars = ["Benz", "Tesla", "Lexus", "Volkswagen"]
console.log(cars.slice(2, 4));

const movies = ["Merlin", "Seer", "Go"]
console.log(movies.join(''));