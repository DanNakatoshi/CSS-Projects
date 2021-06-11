const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// クリックして次のアクティブであるステップの番号を得る
next.addEventListener('click', () => {
  currentActive++;
  // console.log(currentActive);

  // サークルが最大の数になるようにする。
  if(currentActive > circles.length) {
    currentActive = circles.length;
  }
  // console.log(currentActive);

  // サークルの色を変えるファンクション
  update()

})

prev.addEventListener('click', () => {
  currentActive--;
  // console.log(currentActive);

  if(currentActive < 1) {
    currentActive = 1;
  }
  // console.log(currentActive);

  update()
})

function update() {
  // forEach(ループしたいアイテム、その番号 0,1,2....)
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');

  // activesはアクティブになっているサークルの数、circlesは全体のサークルの数
  // console.log(actives.length, circles.length)
  // プログレスバーの色を変えるために％で数を取得したい。。。
  // console.log((actives.length / circles.length) * 100)
  // progress.style.width = (actives.length / circles.length) * 100 + '%';
  progress.style.width = (actives.length - 1) / (circles.length -1 ) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    // ボタンを最後までクリックしたらNEXTボタンを押せないように
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

