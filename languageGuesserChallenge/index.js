// Building language Guesser using npm packages 'franc' & 'langs'
const langs = require('langs');
const franc = require('franc')
const searchKey = process.argv[2] || 'I am happy!';

console.log(searchKey)

try {
    const find = franc(searchKey)
    console.log(find)
    if (find !== 'und') {
        console.log(`Our best guess is : ${langs.where("3", find).name}`)
    } else {
        console.log('cannot recognize language.')
    }
    // console.log(langs.where("2", "kor"))

} catch (e) {
    console.log(e)
}

// console.log(langs.all())