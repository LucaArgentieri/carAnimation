class Car {
    constructor() {
        this.angle = 0
        this.speed = 10
        this.btn = document.querySelector('.btn')
        this.el = document.querySelector('.car')
    }
    init() {
        window.addEventListener('keydown', evt => {
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
    }


}


const macchina = new Car
macchina.init()

