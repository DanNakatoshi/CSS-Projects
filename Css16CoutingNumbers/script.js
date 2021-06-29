const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  // 初めの数をセットする。
  counter.innerText  = '0'

  const updateCounter = () => {
    // +は好ましいファンクションでNumber()やparseInt()と似ている
    const target = +counter.getAttribute('data-target')
    // console.log(typeof target, target)
    const c = +counter.innerText

    // 適当な数を入れてどれくらいの増加率で表示したいか決める。
    const increment = target / 1000
    console.log(increment)

    if(c < target) {

      // ceilは繰り上げのこと
      counter.innerText = `${Math.ceil(c + increment)}`
      // １はミリセカンド
      setTimeout(updateCounter, 1)
    }

  }

  updateCounter();
})