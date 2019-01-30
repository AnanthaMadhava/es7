

//-------------------------------- // .filter function example
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

//-------------------------------- // .reduce function example
// var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// var countedNames = names.reduce(function (allNames, name) { 
//   if (name in allNames) {
//     allNames[name]++;
//   }
//   else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// console.log(countedNames);

//---------------------------------- //Array concatination using spread operator
// let numbers = [1, 2];
// let moreNumbers = [3, 4];
// let allNumbers = [...numbers, ...moreNumbers];
// console.log(allNumbers);


// //--------------------------------------//Object Literals
// let name = 'machine name';
// let machine = {
//     [name]: 'server',
//     'machine hours': 10000
// };
 
// console.log(machine[name]);
// console.log(machine['machine hours']);

// var prefix = 'machine';
// var machine = {
//     [prefix + ' name']: 'server',
//     [prefix + ' hours']: 10000
// };
 
// console.log(machine['machine name']);
// console.log(machine['machine hours']);
//let name = 'machine';
// var server = {
//     name: 'server',
//     restart() {
//         console.log(`The ${this.name} is restarting...`);
//     }
// };
// server.restart();
//------------------------------------------//for of example
// let scores = [80, 90, 70];
// for (let score of scores) {
//     score = score + 5;
//     console.log(score);
// }
// let numbers = [6, 7, 8];
// numbers.foo = "foo";
 
// for (let i in numbers) {
//     console.log(i);
// }

// for (let i of numbers) {
//     console.log(i);
// }
// function requiredArg() {
//    throw new Error('The argument is required');
// }
// function add(x = requiredArg(), y = requiredArg()){
//    return x + y;
// }
 
// add(10);
// add(10,20); 
//---------------------------------------------Array Destructing//
// var numero = ['one', 'two', 'three'];

// var [a, b, c] = numero;
// console.log(a);
// console.log(b); 
// console.log(c);
//-----------------------Object destructuring-----------------------//
// var employees = {name: 'Anantha', id: 101};
// var {name, id} = employees;

// console.log(name);
// console.log(id);

// let employees = {name: 'Anantha', id: 101};
// let {name:a, id:b} = employees;

// console.log(a);
// console.log(b);
//-----------------------Nested object and object destructuring//
// let employee = {
//     id: 1001,
//     profile: {
//         firstName: 'Anantha',
//         lastName: 'Madhava'
//     }
// };
// let {profile: {firstName, lastName}} = employee;
 
// console.log(firstName);
// console.log(lastName);
//----For of---//
//let iterable = [10, 20, 30];
// let iterable = 'Anantha';

// for (let value of iterable) {
//   //value += 1;
//   console.log(value);
// }
//--------------------------------------pow//
// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
// }
// console.log(pow(2, 3));
//--------------------------------------Set//
// let fruits = new Set();
// fruits.add('apple');
// fruits.add('Mango');

// console.log(fruits);
//---------------------------------------Template literals (Template strings)
// var a = 5;
// var b = 10;
// console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');

// var msg = ['This text',
//          'can',
//          'span multiple lines'].join('\n');
// console.log(msg);

let price = 8,
    tax = 1;
 
var netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;
 
console.log(netPrice); 