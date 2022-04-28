let canvas = document.getElementById("canvas");
let ROWS = 30;
let COLS = 50;
let PIXEL = 10;
let pixels = new Map();

// -- drawBoard--
function initializeCanvas() {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            let pixel = document.createElement("div");
            canvas.appendChild(pixel);
            pixel.style.position = "absolute";
            pixel.style.border = "1px solid #aaa";
            pixel.style.width = PIXEL + "px";
            pixel.style.height = PIXEL + "px";
            pixel.style.top = i * PIXEL + "px";
            pixel.style.left = j * PIXEL + "px";
            let key = toKey([i, j]);
            pixels.set(key, pixel);
        }
    }
}
initializeCanvas();

// --drawSnake--

function makeInitializeSnake() {
    return [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
    ];
}

let currentSnake = makeInitializeSnake();
let currentSnakeKeys = toKeySet(currentSnake);
function drawSnake() {
    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            let key = toKey([i, j]);
            let pixel = pixels.get(key);
            let background = "white";
            if (currentSnakeKeys.has(key)) {
                background = "black";
            }
            pixel.style.background = background;
        }
    }
}
drawSnake();


function toKey([top, left]) {
    return top + "_" + left;
}

function toKeySet(snake) {
    let set = new Set();
    for (let cell of snake) {
        let key = toKey(cell);
        set.add(key);
    }
    return set;
}

// --moveSnake--

function step() {
    currentSnakeKeys = toKeySet(currentSnake);
    currentSnake.shift();
    let head = currentSnake[currentSnake.length - 1];
    let nextHead = currentDirection(head);
    currentSnake.push(nextHead);
    drawSnake();
}
drawSnake();
setInterval(() => {
    step();
}, 100);


let moveRight = ([t, l]) => [t, l + 1];
let moveLeft = ([t, l]) => [t, l - 1];
let moveDown = ([t, l]) => [t + 1 , l];
let moveUp = ([t, l]) => [t - 1 , l];
let currentDirection = moveRight;

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowLeft":
            currentDirection = moveLeft;
            break;
        case "ArrowRight":
            currentDirection = moveRight;
            break;
        case "ArrowUp":
            currentDirection = moveUp;
            break;
        case "ArrowDown":
            currentDirection = moveDown;
            break;
    } 
});
    

