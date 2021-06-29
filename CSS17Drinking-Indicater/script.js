const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

// idxはクリックしたカップのインデックス
smallCups.forEach((cup, idx) => {
  // console.log(cup, idx);
  cup.addEventListener('click', () => highlightCups(idx));
})

// 小さいカップをハイライトする
function highlightCups(idx) {
  // クリックしたカップが”フル”で　AND（＆＆）次のエレメントが”フル”を含んでいない場合（！）

  if(smallCups[idx].classList.contains('full') && !smallCups
  [idx].nextElementSibling.classList.contains('full')) {
    // idxを一つマイナスし、カップを空にする
    idx--
  } 

    // クリックした部分までクラスを加えるようにループ
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  })

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  // console.log(fullCups);
  const totalCups = smallCups.length;
   
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    // 330はカップの高さ
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    // 2は合計のL、250ml×フルのカップの数、mlからLに換算するために1000
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}