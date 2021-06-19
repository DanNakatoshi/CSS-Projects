// FetchAPI
// JSON Data
// https://developer.mozilla.org/ja/docs/Web/API/Fetch_API

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    },
  }

  const res = await fetch('https://icanhazdadjoke.com/', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;

}


// .thenを使ったやり方


// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     },
//   }

//   fetch('https://icanhazdadjoke.com/', config)
//   .then(res => res.json())
//   // .then(data => console.log(data));
//   .then(data => {
//     jokeEl.innerHTML = data.joke
//   });
// }