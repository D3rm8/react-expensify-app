// const person = {
// 	name: "Andy",
// 	age: 21,
// 	location: {
// 		city: "New York",
// 		temp: 91,
// 	},
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

// const book = {
// 	title: "Ego is the enemy",
// 	author: "Ryan Holiday",
// 	publisher: {
// 		name: "Penguin",
// 	},
// };

// const { title, author } = book;
// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ["1299 S Juniper Street", "Philli", "Pennsylvania", "19147"];

const [street, city, state, zip] = address;

console.log(`You are in ${street}`);
