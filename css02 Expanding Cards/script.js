// 一つのエレメントを選択したい場合
// const panels = document.querySelector('.panel')

// 複数のエレメントを選択したい場合
const panels = document.querySelectorAll('.panel')

// 実際に選択されているか確認しよう。 
console.log(panels)
console.log(panels[0])

// これをループする。
// すべてのpanelタグにクリックしたときにどうするかファンクションを与える。
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    // console.log('クリック');

    // アクティブというクラスを除くファンクションを実行
    removeActiveClasses()
    
    // クリックしたときにactiveクラスを追加
    panel.classList.add('active');
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}