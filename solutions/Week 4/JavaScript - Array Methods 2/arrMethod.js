/* Week 4 - Lab 5 |  Mario Esparza*/

var people = [
     { name: 'Wes', year: 1988 },
     { name: 'Kait', year: 1986 },
     { name: 'Irv', year: 1970 },
     { name: 'Lux', year: 2015 }
];

var comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?
console.log("Is at least one person 19?")
function nineteen(person) {
    var year = new Date().getFullYear();
    return 19 <= (year - person.year);
}
console.log(people.some(nineteen));
// Array.prototype.every() // is everyone 19?
console.log("Is everyone 19?")

console.log(people.every(function (person) {
    var year = new Date().getFullYear();
    return 19 == (year - person.year);
}))

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
console.log("find the comment with the ID of 823423")
const found = comments.find(function (comment) {
    return comment.id == 823423;
});
console.log(found.text);

// Array.prototype.findIndex()
// Find the comment with this ID
const indexOf = comments.findIndex(function (comment) {
    return comment.id === 823423;
});
console.log("Find the comment with this ID: ", indexOf)
// delete the comment with the ID of 823423
comments.splice(indexOf, 1);
