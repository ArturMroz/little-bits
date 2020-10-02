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
let [xv, yv] = [1, 0]

let points = 0

const bgColor = () => points > 1 ? '#334' : '#000'
const foodColor = () => points > 1 ? '#d33' : '#fff'
const snekColor = () => points > 1 ? '#bada55' : '#fff'

const fps = 10
const interval = 1000 / fps
let then = window.performance.now()
let now, delta

function draw() {
    requestAnimationFrame(draw)

    now = window.performance.now()
    delta = now - then

    if (delta < interval) return

    then = now - (delta % interval)

    ctx.fillStyle = bgColor()
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    head.x += xv
    head.y += yv

    ;[head.x, head.y] = checkBounds(head.x, head.y)

    if (points > 4
        && xv === 0
        && food.x === head.x
        && Math.abs(food.y - head.y) === 2) {
        food.x += Math.random() < 0.5 ? -1 : 1
        food.x = checkBounds(food.x, food.y)[0]
    }

    if (food.x === head.x && food.y === head.y) {
        snekLen++
        points++
        food.x = Math.floor(Math.random() * xMax)
        food.y = Math.floor(Math.random() * yMax)
    }

    ctx.fillStyle = foodColor()
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize)

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

function checkBounds(x, y) {
    if (x > xMax - 1) x = 0
    if (y > yMax - 1) y = 0
    if (x < 0) x = xMax - 1
    if (y < 0) y = yMax - 1

    return [x, y]
}

document.onkeydown = e => {
    switch (e.keyCode) {
        case 37:
            if (xv ===  1) break
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
