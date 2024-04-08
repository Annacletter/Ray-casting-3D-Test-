const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the player position and direction
const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  direction: Math.PI / 4 // 45 degrees in radians
};

// Define a wall
const wall = {
  x1: 100,
  y1: 100,
  x2: 200,
  y2: 200
};

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(player.x, player.y, 5, 0, Math.PI * 2);
  ctx.fill();

  // Draw the wall
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.moveTo(wall.x1, wall.y1);
  ctx.lineTo(wall.x2, wall.y2);
  ctx.stroke();
}

function castRay() {
  // Ray casting logic goes here
  // For simplicity, let's just draw a line from the player in the player's direction
  const endX = player.x + Math.cos(player.direction) * 100;
  const endY = player.y + Math.sin(player.direction) * 100;

  ctx.strokeStyle = 'blue';
  ctx.beginPath();
  ctx.moveTo(player.x, player.y);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

function update() {
  draw();
  castRay();
}

// Main game loop
function gameLoop() {
  update();
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

