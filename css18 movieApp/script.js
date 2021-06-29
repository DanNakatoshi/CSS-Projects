// https://www.themoviedb.org/documentation/api/discover
// https://developers.themoviedb.org/3/getting-started/introduction

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=99ac3f76d7544e61dce330534bfa3474&page=1';
// URLにぶち込んで見てみる

// 画像へのファイルパスの例
// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=99ac3f76d7544e61dce330534bfa3474&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// 最初に取得する映画
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results)

  // console.log(data.results);
  // resultsキーを見る
}

function showMovies(movies) {
  // 一旦画面をクリアする
  main.innerHTML = '';
  
  movies.forEach((movie) => {
    // move.titleでアクセスしなくてよいように{}でオブジェクトにアクセスするための変数を作成
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt=${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
          ${overview}
      </div>
    `

    main.appendChild(movieEl);

  })
}

function getClassByRate(vote) {
  if(vote >= 8 ) {
    return 'green';
  } else if (vote >= 5){
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ↑でページのリロードを防ぐ

  const searchTerm = search.value;
  // htmlのフォームからValueを引っ張る

  if(searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = ''
  
  } else {
    window.location.reload();
  }
});