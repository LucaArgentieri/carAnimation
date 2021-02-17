class Car {
    constructor() {
        this.angle = 0
        this.speed = 10
        this.border = document.querySelector('.container')
        this.btn = document.querySelector('.btn')
        this.el = document.querySelector('.car')
        this.keysPressed = {};
    }
    init() {
        window.addEventListener('keydown', evt => {

            this.keysPressed[evt.key] = true;
            console.log(this.keysPressed)

            if (this.keysPressed["ArrowRight"] && this.keysPressed["ArrowUp"]) {
                this.speed = 20
                this.angle++ * 2
                this.animate()
            }
            if (this.keysPressed["ArrowLeft"] && this.keysPressed["ArrowUp"]) {
                this.speed = 20
                this.angle-- * -2
                this.animate()
            }
            if (this.keysPressed["ArrowRight"] && this.keysPressed["ArrowDown"]) {
                this.speed++
                this.angle++ * -2
                this.animate()
            }
            if (this.keysPressed["ArrowLeft"] && this.keysPressed["ArrowDown"]) {
                this.speed++
                this.angle-- * -2
                this.animate()
            }
            if (this.keysPressed["ArrowRight"]) {
                this.speed = 0
                this.angle++
                this.animate()
            }
            if (this.keysPressed['ArrowLeft']) {
                this.speed = 0
                this.angle--
                this.animate()
            }
            if (this.keysPressed['ArrowUp']) {
                this.speed++
                this.animate()
            }
            if (this.keysPressed['ArrowDown']) {
                this.speed = -25
                this.speed--
                this.animate()
            }


            this.slow()

        });
        () => window.requestAnimationFrame(this.init)
    }

    animate() {
        this.speed++
        gsap.to(this.el, {
            x: "+=" + (this.speed * Math.cos(this.angle * Math.PI / 180)),
            y: "+=" + (this.speed * Math.sin(this.angle * Math.PI / 180)),
            rotate: this.angle
        });
        () => window.requestAnimationFrame(this.animate)

    }

    slow() {
        document.addEventListener('keyup', (event) => {
            this.speed = 10
            delete this.keysPressed[event.key];
        });
        () => window.requestAnimationFrame(this.slow)
    }

}

const macchina = new Car()
const startAnimation = () => {
    macchina.init()
}


window.requestAnimationFrame(startAnimation)
