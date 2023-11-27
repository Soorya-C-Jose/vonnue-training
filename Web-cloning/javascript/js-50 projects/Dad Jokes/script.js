const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke ()

function generateJoke() {
 fetch('https://official-joke-api.appspot.com/random_joke')
 .then((res) => res.json())
 .then((data) => {
    jokeEl.innerHTML = data.setup
 })
}