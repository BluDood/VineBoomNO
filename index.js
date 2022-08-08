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