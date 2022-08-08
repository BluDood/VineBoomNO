class VineBoomRadio {
    constructor() {
        this.radio = new Audio('http://stream.zeno.fm/hp60ey677zhvv')
    }

    play() {
        this.radio.play()
    }

    pause() {
        this.radio.pause()
    }

    toggle() {
        if (this.radio.paused) {
            this.play()
        } else {
            this.reload()
        }
    }

    reload() {
        this.radio.src = 'http://stream.zeno.fm/hp60ey677zhvv'
        this.radio.onpause()
    }

    onplay(callback) {
        this.radio.onplay = callback
    }

    onpause(callback) {
        this.radio.onpause = callback
    }
}

const radio = new VineBoomRadio()

const player = document.querySelector('.player')
const playBtn = document.querySelector('.player .play')

playBtn.onclick = () => radio.toggle();

radio.onplay(() => {
    player.classList.add('playing')
    playBtn.innerHTML = 'pause'
})

radio.onpause(() => {
    player.classList.remove('playing')
    playBtn.innerHTML = 'play'
})