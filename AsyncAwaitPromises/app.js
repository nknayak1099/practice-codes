const changeBg = (color, sec) => {

    console.log('==================');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = color;
            resolve('success');
        }, sec)
    })
}


// changeBg with async await
// const changeBg = async (color, sec) => {
//     setTimeout(() => {
//         document.querySelector('body').style.backgroundColor = color;
//         console.log(color)
//     }, sec)
// }

(async () => {
    console.log('changing background red');
    await changeBg('red', 2000);
    console.log('changing background pink');
    await changeBg('pink', 2000);
    console.log('changing background yellow');
    await changeBg('yellow', 2000);
    console.log('changing background green');
    await changeBg('green', 2000);
})()














// chageBg with promise chain
// const changeBg = (color, sec) => {

//     console.log('==================');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.querySelector('body').style.backgroundColor = color;
//             resolve('success');
//         }, sec)
//     })
// }

// const red = changeBgPromise('red', 2000);
// let lastThen = red.then((d) => {
//     console.log(d);
//     return changeBgPromise('pink', 2000)
// })
//     .then((d) => {
//         console.log(d);
//         changeBgPromise('yellow', 2000)
//         return 'hithen'
//     }).then((d) => {
//         console.log(d)
//         changeBgPromise('green', 2000)  // last two then's run at the same time because i didn't returned previous then
//     })













// // Primises & then,catch returned values
// const changeBgPromise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     document.querySelector('body').style.backgroundColor = 'red';
//     // resolve('hi');
//     reject('bye');
//     // },);
// })


// console.log(changeBgPromise)
// let resThen = changeBgPromise.then(() => {
//     console.log('after promise success then run.');
//     console.log(this.resThen)
// })

// console.log(resThen); // then also returns a fullfilled promise
// let resCatch = changeBgPromise.catch(() => {
//     console.log('after promise reject catch run.');
//     console.log(this.resCatch)
// })

// console.log(resCatch); // catch also returns a fullfilled promise













// callback hell - for ie we will change bg color of body after every few seconds
// function changeBg(color, sec, nextData) {
//     setTimeout(() => {
//         document.querySelector('body').style.backgroundColor = color;
//         if (nextData) {
//             nextData();
//         }
//     }, sec)
// }

// // calling function with color:sec  - yello:1,red:2,pink:3,blue:4,green:3,skyblue:2,yello:1

// // changeBg('yellow', 1000, changeBg('red', 2000));//Error as function with red immediately called and its result is passed as argument.

// changeBg('yellow', 1000, () => {
//     console.log('yellow');
//     changeBg('red', 2000, () => {
//         console.log('red');
//         changeBg('pink', 3000, () => {
//             console.log('pink');
//             changeBg('blue', 4000, () => {
//                 console.log('blue');
//                 changeBg('green', 3000, () => {
//                     console.log('green');
//                     changeBg('skyblue', 2000, () => {
//                         console.log('skyblue');
//                         changeBg('yellow', 1000, () => {
//                             console.log('yellow');

//                         })
//                     })
//                 })
//             })
//         })
//     });
// }
// );
// console.log('This is callback hell!');























// //callbacks - function passed as argument inside another functions
// function hello() {
//     console.log('hello');
// }

// let helloFuncRet = hello();// it returns undefined by default
// console.log(helloFuncRet);

// function again(hello) {
//     hello();
//     console.log('again!')
//     return 'callback example';
// }

// let againFuncRet = again(hello);
// console.log(againFuncRet);
