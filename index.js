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
            if (evt.key === 'ArrowRight') {
                this.angle = 0
                this.speed++

                requestAnimationFrame(moveRight);

                gsap.to(this.el, {
                    rotation: 90
                })

            }
            if (evt.key === 'ArrowLeft') {
                this.angle = 0
                this.speed++

                requestAnimationFrame(moveLeft);

                gsap.to(this.el, {
                    rotation: 270
                })
            }
            if (evt.key === 'ArrowUp') {
                this.angle = -90
                this.speed++

                requestAnimationFrame(moveUp);

                gsap.to(this.el, {
                    rotation: 0
                })
            }
            if (evt.key === 'ArrowDown') {
                this.angle = 90
                this.speed++

                requestAnimationFrame(moveDown);

                gsap.to(this.el, {
                    rotation: 180
                })
            }
            // Combo di tasti
            if (this.keysPressed['ArrowLeft'] && evt.key == 'ArrowDown' || this.keysPressed['ArrowDown'] && evt.key == 'ArrowLeft') {
                this.angle = -225
                console.log('left + down')
                gsap.to(this.el, {
                    rotation: -225
                })
                moveDownUpLeft()
            }
            if (this.keysPressed['ArrowRight'] && evt.key == 'ArrowDown' || this.keysPressed['ArrowDown'] && evt.key == 'ArrowRight') {
                this.angle = 45
                gsap.to(this.el, {
                    rotation: 140
                })
                moveDownUpRight()
            }
            if (this.keysPressed['ArrowLeft'] && evt.key == 'ArrowUp' || this.keysPressed['ArrowUp'] && evt.key == 'ArrowLeft') {
                this.angle = 225
                gsap.to(this.el, {
                    rotation: 320
                })
                moveDownUpLeft()

            }
            if (this.keysPressed['ArrowRight'] && evt.key == 'ArrowUp' || this.keysPressed['ArrowUp'] && evt.key == 'ArrowRight') {
                this.angle = -45
                gsap.to(this.el, {
                    rotation: 45
                })
                moveDownUpRight()

            }
        })



        window.addEventListener('keyup', evt => {
            this.speed = 10
        })

        const moveRight = () => {
            gsap.to(this.el, {
                x: "+=" + (this.speed * Math.cos(this.angle * Math.PI / 180)),
                y: "+=" + (this.speed * Math.sin(this.angle * Math.PI / 180))
            })
        }
        const moveLeft = () => {
            gsap.to(this.el, {
                x: "+=-" + (this.speed * Math.cos(this.angle * Math.PI / 180)),
                y: "+=-" + (this.speed * Math.sin(this.angle * Math.PI / 180))
            })

        }
        const moveUp = () => {
            gsap.to(this.el, {
                y: "+=" + (this.speed * Math.sin(this.angle * Math.PI / 180))
            })

        }
        const moveDown = () => {
            gsap.to(this.el, {
                y: "+=" + (this.speed * Math.sin(this.angle * Math.PI / 180))
            })

        }
        const moveDownUpRight = () => {
            gsap.to(this.el, {
                x: "+=" + (this.speed * Math.cos(this.angle * Math.PI / 180))
            })
        }
        const moveDownUpLeft = () => {
            gsap.to(this.el, {
                x: "+=" + (this.speed * Math.cos(this.angle * Math.PI / 180))
            })
        }

        document.addEventListener('keyup', (event) => {
            delete this.keysPressed[event.key];
        });
    }


}


const macchina = new Car
const startAnimation = () => {
    macchina.init()
}
window.requestAnimationFrame(startAnimation)