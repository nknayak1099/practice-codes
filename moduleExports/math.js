const add = (...a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}

const PI = 3.14;

const cube = (n) => n * n * n;

// console.log(cube(3))


exports.PI = PI;

// module.exports = {
//     add: add,
//     PI: PI,
//     cube: cube
// }


// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.cube = cube;

