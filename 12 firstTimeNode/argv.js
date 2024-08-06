console.log('Hi, from argv file');
console.log(process.argv)
console.log('with "process.argv", we can get user input from command line');

const argv = process.argv.slice(2);
for (let arg of argv) {
    console.log(`Hi, ${arg}`);
}
