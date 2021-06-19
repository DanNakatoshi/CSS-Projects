const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', ()=> {
    toggle.parentNode.classList.toggle('active')
  })
})


// parentNodeでfaqのタグを選択肢activeクラスを追加する。