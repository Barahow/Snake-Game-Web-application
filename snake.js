let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");

let GRID_SIZE = 32;

let gamOver = false
let snake = []; //creating an empty snake

// filling our snake with our starting point
snake[0] = {
  x: 9 * GRID_SIZE,
  y: 10 * GRID_SIZE
}
let direction = "right";
let food = {
  x: Math.floor(Math.random() * 17 + 1) * GRID_SIZE,
  y: Math.floor(Math.random() * 15 + 3) * GRID_SIZE



}



function createGrid() {
  context.fillStyle = "yellow";
  context.fillRect(0, 0, 16 * GRID_SIZE, 16 * GRID_SIZE); //filling our grid 
}

function createSnake() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "green";
    context.fillRect(snake[i].x, snake[i].y, GRID_SIZE, GRID_SIZE);
  }
}

function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, GRID_SIZE, GRID_SIZE);
}

//checks our input and the keycode numbers can be found on google
document.addEventListener('keydown', update);

function update(event) {
  if (event.keyCode == 37 && direction != 'right') direction = 'left';
  if (event.keyCode == 38 && direction != 'down') direction = 'up';
  if (event.keyCode == 39 && direction != 'left') direction = 'right';
  if (event.keyCode == 40 && direction != 'up') direction = 'down';
}