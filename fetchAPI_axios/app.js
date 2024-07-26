// Setting Axios headers
const getDadJokes = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } };
        const jokes = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(jokes.data.joke)
    } catch (e) {
        console.log('Error!');
    }
}
getDadJokes();









// Axios

// const getCatFacts = async () => {
//     try {
//         const facts = await axios.get('https://cat-fact.herokuapp.com/facts');
//         console.log(facts.data[0].text)
//     } catch (e) {
//         console.log('Error!')
//     }
// }

// getCatFacts();










// document.querySelector('body').style.backgroundColor = 'red';

// let data = fetch('https://cat-fact.herokuapp.com/facts');
// data.then((data) => {
//     let catFacts = data.json()
//     console.log(catFacts)
//     return catFacts;
// }).then((d) => {
//     console.log(d[0].text)
// })


// Above code with async await

// (async () => {
//     let catFacts = await fetch('https://cat-fact.herokuapp.com/facts');
//     let data = await catFacts.json()
//     console.log(catFacts)
//     console.log(data[1].text

//     );
// })()