export const GRID_SIZE = 16;
export const INITIAL_DIRECTION = "right";

const DIRECTION_VECTORS = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function samePosition(a, b) {
  return a.x === b.x && a.y === b.y;
}

function isOppositeDirection(a, b) {
  return (
    (a === "up" && b === "down") ||
    (a === "down" && b === "up") ||
    (a === "left" && b === "right") ||
    (a === "right" && b === "left")
  );
}

function createStartingSnake(gridSize) {
  const center = Math.floor(gridSize / 2);

  return [
    { x: center, y: center },
    { x: center - 1, y: center },
    { x: center - 2, y: center },
  ];
}

export function spawnFood(gridSize, snake, randomFn = Math.random) {
  const openCells = [];

  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      const occupied = snake.some((segment) => segment.x === x && segment.y === y);

      if (!occupied) {
        openCells.push({ x, y });
      }
    }
  }

  if (openCells.length === 0) {
    return null;
  }

  const index = Math.floor(randomFn() * openCells.length);
  return openCells[index];
}

export function createInitialState(
  gridSize = GRID_SIZE,
  randomFn = Math.random,
) {
  const snake = createStartingSnake(gridSize);

  return {
    gridSize,
    snake,
    direction: INITIAL_DIRECTION,
    queuedDirection: null,
    food: spawnFood(gridSize, snake, randomFn),
    score: 0,
    gameOver: false,
    won: false,
  };
}

export function queueDirection(state, nextDirection) {
  if (!DIRECTION_VECTORS[nextDirection] || state.gameOver) {
    return state;
  }

  const activeDirection = state.queuedDirection ?? state.direction;

  if (isOppositeDirection(activeDirection, nextDirection)) {
    return state;
  }

  if (activeDirection === nextDirection) {
    return state;
  }

  return {
    ...state,
    queuedDirection: nextDirection,
  };
}

export function advanceGame(state, randomFn = Math.random) {
  if (state.gameOver || state.won) {
    return state;
  }

  const direction = state.queuedDirection ?? state.direction;
  const vector = DIRECTION_VECTORS[direction];
  const currentHead = state.snake[0];
  const nextHead = {
    x: currentHead.x + vector.x,
    y: currentHead.y + vector.y,
  };

  const hitBoundary =
    nextHead.x < 0 ||
    nextHead.x >= state.gridSize ||
    nextHead.y < 0 ||
    nextHead.y >= state.gridSize;

  if (hitBoundary) {
    return {
      ...state,
      direction,
      queuedDirection: null,
      gameOver: true,
    };
  }

  const ateFood = state.food !== null && samePosition(nextHead, state.food);
  const bodyToCheck = ateFood ? state.snake : state.snake.slice(0, -1);
  const hitSelf = bodyToCheck.some((segment) => samePosition(segment, nextHead));

  if (hitSelf) {
    return {
      ...state,
      direction,
      queuedDirection: null,
      gameOver: true,
    };
  }

  const nextSnake = [nextHead, ...state.snake];
  if (!ateFood) {
    nextSnake.pop();
  }

  const nextFood = ateFood
    ? spawnFood(state.gridSize, nextSnake, randomFn)
    : state.food;

  return {
    ...state,
    snake: nextSnake,
    direction,
    queuedDirection: null,
    food: nextFood,
    score: ateFood ? state.score + 1 : state.score,
    won: ateFood && nextFood === null,
  };
}
