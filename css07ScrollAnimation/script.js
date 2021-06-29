const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);


checkBoxes();

function checkBoxes() {
  // console.log(window.innerHeight / 5*4);
  const triggerBottom =   window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    // コンテンツボックスのトップの高さがトリガーボトムと同じになった場合にアニメーションを起動する
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }

  })

}