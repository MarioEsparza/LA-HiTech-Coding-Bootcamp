/* Week 4 - Lab 4 |  Mario Esparza*/

// Some data we can work with

var inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

var flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("Inventors born in 1500's:");
console.table(inventors.filter(function (obj) {return obj.year <= 1599 && obj.year >= 1500;}));

/*
Array.prototype.filtered = function () {
    console.log("Inventors born in 1500's:");
    for (var i = 0; i < this.length; i++) {
        if (this[i].year > 1499 && this[i].year < 1600) {
            console.log(this[i].first, " ", this[i].last, " Born: ", this[i].year, " Died: ", this[i].passed);
        }
    }
}
inventors.filtered();
console.table(inventors.filter);
*/


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
function getNames(item, index) {
        var tempArr = [item.first,   item.last].join(" ");
        return tempArr;
}
console.log("Inventors full names:");
console.log(inventors.map(getNames));

/*
Array.prototype.mapped = function () {
    var Arr = [];
    for (var i = 0; i < this.length; i++) {
        Arr[i] = this[i].first + ", " + this[i].last;
    }
    return Arr;
}
console.log(inventors.mapped());
*/

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('Sorted by year born:');
console.log(inventors.sort(function (a, b) { 
    return a.year - b.year; }));

/*
function sortByYear() {
    var byYear = inventors.slice(0);
    byYear.sort(function (a, b) {
        return a.year - b.year;
    });
    console.log('Sorted by year born:');
    return byYear;
}
console.table(sortByYear());
*/

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
function totalYears(total, inventor) {
    return total + (inventor.passed - inventor.year);
}
console.log("Total Years: ", inventors.reduce(totalYears, 0));

/*
Array.prototype.reduced = function () {
    var total = 0;
    for (var i = 0; i < this.length; i++) {
        total += this[i].passed - this[i].year;
    }
    return total;
}
console.log("Total Years 2: ", inventors.reduced());
*/
// 5. Sort the inventors by years lived
console.log('Sorted by years lived:');
console.log(inventors.sort(function (a, b) {
    return (a.passed - a.year) - (b.passed - b.year);
}));

/*
Array.prototype.sortAge = function () {
    var byAge = [],
        age = 0;
    for (var i = 0; i < this.length; i++) {
        age = this[i].passed - this[i].year;
        byAge[i] = { first: this[i].first, last: this[i].last, lived: age };
    }
    byAge.sort(function (a, b) {
        return a.lived - b.lived;
    });
    console.log('Sorted by age lived:');
    console.log(byAge);
}
inventors.sortAge();
*/

// 6. sort Exercise
// Sort the people alphabetically by last name
console.log('People Sorted By Name:');
console.log(people.sort(function (a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}));


// 7. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
console.log(data.reduce(function (obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    } 
    obj[item]++;
    return obj;
}, []));
