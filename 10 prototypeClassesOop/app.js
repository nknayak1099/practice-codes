// extends and super keywords
class Animal {
    constructor(name, age = 3) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating.`;
    }
}

const brunoCat = new Animal('Bruno', 5);
console.log(brunoCat.eat());


console.log('=========')
class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    meow() {
        return 'Meowww!'
    }
}

const bruno = new Cat('bruno', 'pink')
console.log(bruno)







// // javascript Classes with constructor
// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     greet() {
//         return `hello ${this.firstName}`;
//     }
// }

// const p1 = new Person('Shyam', 'Shukla', 25);
// console.log(p1.firstName);
// console.log(p1.greet());









// // 'this' keyword behaves very different with arrow function as it always points to window object

// const man = {
//     firstName: 'Shyam',
//     lastName: 'Shukla',
//     fullName: function () {
//         console.log('this is traditional function definition.');
//         console.log(this);
//         return 'above is not arrow function ========'
//     }
// }

// const woman = {
//     firstName: 'Shruti',
//     lastName: 'Shukla',
//     fullName: () => {
//         console.log('this is new arrow function definition.');
//         console.log(this);
//         return 'above is arrow function ========'
//     }
// }




// let bodyColor = document.querySelector('body');

// //without consturctor functions
// function makeColor(r, g, b) {
//     color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this;
//         return ` ${r} ${g} ${b}`;
//     }
//     return color;
// }

// const red = makeColor(255, 100, 0);
// console.log(red);
// console.log(red.rgb());

// bodyColor.style.backgroundColor = `rgb(${red.rgb()})`;    //working
// bodyColor.style.backgroundColor = `rgb(55 100 25)`;         //working
// Construction functions
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }

// const green = new Color(0, 255, 0);
// console.log(green)












// Prototypes
// console.log(String)
// console.log(String.prototype);
// console.log('defining own medthods in String.prototype');

// String.prototype.hello = function () {
//     console.log(`hello, ${this}`);
// }

// console.log(String.prototype.hello);
// console.log(String.prototype.toUpperCase);

// console.log('Ram'.hello()); // Ram.hello() returned undefined 