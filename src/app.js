import {
  GRID_SIZE,
  advanceGame,
  createInitialState,
  queueDirection,
} from "./game.js";

const TICK_MS = 140;

const boardElement = document.querySelector("#board");
const scoreElement = document.querySelector("#score");
const bestScoreElement = document.querySelector("#best-score");
const statusElement = document.querySelector("#status");
const pauseButton = document.querySelector("#pause-button");
const restartButton = document.querySelector("#restart-button");
const controlButtons = document.querySelectorAll("[data-direction]");

let state = createInitialState(GRID_SIZE);
let paused = false;
let started = false;
let timerId = null;
let bestScore = 0;
const cells = [];

function positionKey(position) {
  return `${position.x},${position.y}`;
}

function buildBoard() {
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < GRID_SIZE * GRID_SIZE; index += 1) {
    const cell = document.createElement("div");
    cell.className = "cell";
    fragment.appendChild(cell);
    cells.push(cell);
  }

  boardElement.appendChild(fragment);
}

function render() {
  const snakeMap = new Map(
    state.snake.map((segment, index) => [positionKey(segment), index]),
  );
  const foodKey = state.food ? positionKey(state.food) : "";

  cells.forEach((cell, index) => {
    const x = index % GRID_SIZE;
    const y = Math.floor(index / GRID_SIZE);
    const key = `${x},${y}`;
    const segmentIndex = snakeMap.get(key);

    cell.className = "cell";

    if (segmentIndex !== undefined) {
      cell.classList.add("cell--snake");
      if (segmentIndex === 0) {
        cell.classList.add("cell--head");
      }
    } else if (foodKey === key) {
      cell.classList.add("cell--food");
    }
  });

  scoreElement.textContent = String(state.score);
  bestScoreElement.textContent = String(bestScore);

  if (state.gameOver) {
    statusElement.textContent = "Game over. Press Restart to play again.";
  } else if (state.won) {
    statusElement.textContent = "You filled the board. Press Restart to play again.";
  } else if (paused) {
    statusElement.textContent = "Paused.";
  } else if (!started) {
    statusElement.textContent = "Use arrow keys or WASD to start.";
  } else {
    statusElement.textContent = "Collect food and avoid the walls.";
  }

  pauseButton.textContent = paused ? "Resume" : "Pause";
}

function stopLoop() {
  if (timerId !== null) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function tick() {
  state = advanceGame(state);
  bestScore = Math.max(bestScore, state.score);
  render();

  if (state.gameOver || state.won) {
    stopLoop();
  }
}

function startLoop() {
  if (timerId !== null || paused || state.gameOver || state.won) {
    return;
  }

  timerId = window.setInterval(tick, TICK_MS);
}

function beginPlay() {
  if (!started) {
    started = true;
  }

  if (!paused) {
    startLoop();
  }
}

function handleDirection(direction) {
  state = queueDirection(state, direction);

  if (!state.gameOver && !state.won) {
    beginPlay();
  }

  render();
}

function restartGame() {
  stopLoop();
  paused = false;
  started = false;
  state = createInitialState(GRID_SIZE);
  render();
}

function togglePause() {
  if (state.gameOver || state.won || !started) {
    return;
  }

  paused = !paused;

  if (paused) {
    stopLoop();
  } else {
    startLoop();
  }

  render();
}

function directionFromKey(key) {
  const normalized = key.toLowerCase();

  if (normalized === "arrowup" || normalized === "w") {
    return "up";
  }
  if (normalized === "arrowdown" || normalized === "s") {
    return "down";
  }
  if (normalized === "arrowleft" || normalized === "a") {
    return "left";
  }
  if (normalized === "arrowright" || normalized === "d") {
    return "right";
  }

  return null;
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    event.preventDefault();
    togglePause();
    return;
  }

  const direction = directionFromKey(event.key);
  if (!direction) {
    return;
  }

  event.preventDefault();

  if (paused) {
    paused = false;
  }

  handleDirection(direction);
});

pauseButton.addEventListener("click", () => {
  togglePause();
});

restartButton.addEventListener("click", () => {
  restartGame();
});

controlButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (paused) {
      paused = false;
    }

    handleDirection(button.dataset.direction);
  });
});

buildBoard();
render();
