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
  x: Math.floor(Math.random() * 15 + 1) * GRID_SIZE,
  y: Math.floor(Math.random() * 15 + 1) * GRID_SIZE



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

// cheack collision function
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

function initializeGame() {

  if (snake[0].x > 15 * GRID_SIZE && direction == "right")
    snake[0].x = 0;
  if (snake[0].x < 0 && direction == 'left')
    snake[0].x = 16 * GRID_SIZE;
  if (snake[0].y > 15 * GRID_SIZE && direction == "down")
    snake[0].y = 0;
  if (snake[0].y < 0 && direction == 'up')
    snake[0].y = 16 * GRID_SIZE;

  for (i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {


      clearInterval(game);
      alert('Game Over :(');
    }



  }
}



  createGrid()

  createSnake();
  drawFood();


