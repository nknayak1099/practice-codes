const play1 = document.querySelector('#play1');
const play2 = document.querySelector('#play2');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btnReset = document.querySelector('#btnReset');
const gameTimes = document.querySelector('#gameTimes');

const checkWin = () => {
    if (parseInt(play1.innerText) == gameTimes.value) {
        play1.style.color = 'green';
        play2.style.color = 'red';
    } else if (parseInt(play2.innerText) == gameTimes.value) {
        play2.style.color = 'green';
        play1.style.color = 'red';
    }
    btn1.disabled = true;
    btn2.disabled = true;
}

const reset = () => {
    play1.innerText = 0;
    play2.innerText = 0;
    btn1.disabled = false;
    btn2.disabled = false;
    play2.style.color = 'black';
    play1.style.color = 'black';
}
// console.log('h');
btn1.addEventListener('click', function () {
    // console.log('hhhhh');
    play1.innerText = parseInt(play1.innerText) + 1;
    if (parseInt(play1.innerText) == gameTimes.value) {
        checkWin();
    }

})
btn2.addEventListener('click', function () {
    // console.log('hhhhh');
    play2.innerText = parseInt(play2.innerText) + 1;
    if (parseInt(play2.innerText) == gameTimes.value) {
        checkWin();
    }
})

btnReset.addEventListener('click', reset)
