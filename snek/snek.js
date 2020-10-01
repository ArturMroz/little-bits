const scoreDisplay = document.querySelector('#score')
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const gridSize = 20
const xMax = Math.floor(canvas.width / gridSize)
const yMax = Math.floor(canvas.height / gridSize)

let head = { x: -1, y: 0 }
let food = { x: 5, y: 5 }
let snek = []
let snekLen = 3
let xv = 1, yv = 0

let points = 0

const bgColor = () => points > 1 ? '#334' : '#000'
const foodColor = () => points > 1 ? '#d33' : '#fff'
const snekColor = () => points > 1 ? '#bada55' : '#fff'

const fps = 15
const interval = 1000 / fps
let then = window.performance.now()
let now, delta

function draw() {
    requestAnimationFrame(draw)

    now = window.performance.now()
    delta = now - then;

    if (delta < interval) return

    then = now - (delta % interval);

    head.x += xv
    head.y += yv

    ctx.fillStyle = bgColor()
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = foodColor()
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize)

    if (head.x > xMax - 1) head.x = 0
    if (head.y > yMax - 1) head.y = 0
    if (head.x < 0) head.x = xMax - 1
    if (head.y < 0) head.y = yMax - 1

    if (food.x === head.x && food.y === head.y) {
        snekLen++
        points++
        food.x = Math.floor(Math.random() * xMax)
        food.y = Math.floor(Math.random() * yMax)
    }

    ctx.fillStyle = snekColor()
    snek.forEach(({x, y}) => {
        ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize)

        if (head.x === x && head.y === y) {
            points = 0
            snekLen = 3
        }
    })

    snek.push({x: head.x, y: head.y})
    snek = snek.slice(-snekLen)

    scoreDisplay.textContent = points * 100
}

draw();

document.onkeydown = e => {
    switch (e.keyCode) {
        case 37:
            if (xv ===  1) return
            xv = -1
            yv = 0
            break

        case 38:
            if (yv === -1) break
            xv = 0
            yv = 1
            break

        case 39:
            if (xv === -1) break
            xv = 1
            yv = 0
            break

        case 40:
            if (yv === 1) break
            xv = 0
            yv = -1
            break
    }
}
