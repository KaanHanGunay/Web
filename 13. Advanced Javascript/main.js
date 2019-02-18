const player = 'boby';
let experience = 100;
let wizardLevel = false;

const greeting = `Hello ${player} you seem to be doing ${experience} level :)`;

const add = (a, b) => a + b;

// Closures - Bir fonksiyonun bir kere çalıştıktan sonra tekrar çalışmaması
const first = () => {
    const greet = 'Hi';
    const second = () => {
        const name = 'Boby';
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Currying - Bir fonsksiyona bir kerede sadece 1 değişken verilip geriye fonksiyon döndürmesi
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); // 5 ile çarpma fonksiyonu

// Compose - Değişken olarak fonksiyon vererek tüm işlemlerin gerçekleştirilmesi
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

// Diziler - Arrays
const array = [1, 5, 98, 4, 56]
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2);
});

// map, filter, reduce
const mapArray = array.map(num => {
    return num * 2;
}); // array üzerinde işlemler yaparak yeni array oluşturma

const filterArray = array.filter(num => {
    return num > 5;
}); // array üzerinde bir şarta bağlı olarak yeni array oluşturma

const reduceArray = array.reduce((acc, num) => {
    return acc + num;
}, 0); // tüm işlemleri acc değişkeni ile başlamasını sağlar

// Objects
// Reference Type
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10}; // object3 is not equal object1

// Context
const object4 = {
    a: function () {
        console.log(this);
    }
} // this bulunulan bölgeyi kast eder

// Instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }
    play() {
        console.log(`Weeee I'm a ${this.type}`);
    }
}

// ES7
const pets = ['cat', 'dog'];
pets.includes('dog'); // returns True

const square = (x) => x**2;
console.log(square(5));

// ES8
let a = "String";
a.padStart(5); // Add 5 spaces at the begining
a.padEnd(5); // Add 5 spaces at the ending

const fun = (a, b,) => {
    // do someting
} // parametrelerde sonda , olması sorun teşkil etmez

Object.keys(object1); // Return all keys
Object.entries(object1); // Return all entries as a array
Object.values(object3); // Reaturn all values

// Advanced Loops
const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 50
}

// for of
for(item of basket){
    console.log(item);
} // using with itarables

// for in
for(item in detailedBasket){
    console.log(item);
} // using with objects (properties)