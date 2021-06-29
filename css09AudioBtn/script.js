const sounds = ['お早う', '宜しく', '覚悟', '甘い'];

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
　
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopMp3()
    
    document.getElementById(sound).play();
  })

  document.getElementById('buttons').appendChild(btn);
})

// 音声が被らないように、他のボタンを押すと現在流れている音声が止まる。
function stopMp3() {
  sounds.forEach(sound => {
    const mp3 = document.getElementById(sound);

    mp3.pause();
    mp3.currentTime = 0;
  })
}