const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;


// https://www.w3schools.com/jsref/met_win_setinterval.asp

// 30はミリセカンド
let int = setInterval(blurring, 30);

function blurring() {
  // console.log(load);
  load++;

  if (load > 99) {
    // console.log(load);
    clearInterval(int);
  }
// テンプレートリテラル
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  // console.log(load);
}

// numはもとになる数、
// in_minは元のスタート数
// in_maxは元の終了値
// out_minは使用したい値の始まり値
// out_maxは使用したい値の完了値
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers