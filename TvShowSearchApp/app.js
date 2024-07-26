const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
})

const searchMovie = async (key = 'girls') => {
    const movies = await axios.get(`https://api.tvmaze.com/search/shows?q=${key}`);
    // console.log(movies.data[0].show.image['medium']);
    movieCard(movies.data);
}

searchMovie()
const shows = document.querySelector('#shows');
shows.style.display = 'flex';
shows.style['flex-wrap'] = 'wrap';
shows.style['justify-content'] = 'space-evenly';
const movieCard = (Movies) => {
    for (movie of Movies) {
        // console.log(movie.show.image)
        // console.log(typeof (movie.show.image))
        // console.log(movie.show)
        if (movie.show.image !== null) {
            let cardDiv = document.createElement('a');
            let cardCap = document.createElement('p');
            let cardImg = document.createElement('img');
            cardCap.innerText = movie.show.name;
            cardImg.src = movie.show.image.medium;
            cardDiv.href = movie.show.url;
            cardDiv.target = '_blank';
            cardDiv.append(cardImg);
            cardDiv.append(cardCap);
            shows.append(cardDiv);
        }
        // console.log(typeof (movie.show.image.original))
    }
}

const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    shows.innerText = "";
    console.log(input.value);
    searchMovie(input.value);

})