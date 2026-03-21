import assert from "node:assert/strict";

import {
  advanceGame,
  createInitialState,
  queueDirection,
  spawnFood,
} from "../src/game.js";

const tests = [];

function test(name, fn) {
  tests.push({ name, fn });
}

test("createInitialState creates a three-segment snake and food off the snake", () => {
  const state = createInitialState(8, () => 0);

  assert.equal(state.snake.length, 3);
  assert.deepEqual(state.snake[0], { x: 4, y: 4 });
  assert.notDeepEqual(state.food, state.snake[0]);
  assert.equal(state.score, 0);
});

test("queueDirection rejects instant reverse turns", () => {
  const state = createInitialState(8, () => 0);
  const nextState = queueDirection(state, "left");

  assert.equal(nextState.queuedDirection, null);
});

test("advanceGame moves the snake in the queued direction", () => {
  const state = {
    ...createInitialState(8, () => 0),
    queuedDirection: "down",
  };

  const nextState = advanceGame(state, () => 0);

  assert.deepEqual(nextState.snake[0], { x: 4, y: 5 });
  assert.equal(nextState.direction, "down");
  assert.equal(nextState.queuedDirection, null);
});

test("advanceGame grows and increments score after eating food", () => {
  const state = {
    gridSize: 8,
    snake: [
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
    ],
    direction: "right",
    queuedDirection: null,
    food: { x: 4, y: 3 },
    score: 0,
    gameOver: false,
    won: false,
  };

  const nextState = advanceGame(state, () => 0);

  assert.equal(nextState.snake.length, 4);
  assert.deepEqual(nextState.snake[0], { x: 4, y: 3 });
  assert.equal(nextState.score, 1);
  assert.notDeepEqual(nextState.food, { x: 4, y: 3 });
});

test("advanceGame ends the game on boundary collision", () => {
  const state = {
    gridSize: 5,
    snake: [
      { x: 4, y: 2 },
      { x: 3, y: 2 },
      { x: 2, y: 2 },
    ],
    direction: "right",
    queuedDirection: null,
    food: { x: 0, y: 0 },
    score: 0,
    gameOver: false,
    won: false,
  };

  const nextState = advanceGame(state, () => 0);

  assert.equal(nextState.gameOver, true);
});

test("advanceGame ends the game on self collision", () => {
  const state = {
    gridSize: 6,
    snake: [
      { x: 2, y: 2 },
      { x: 2, y: 1 },
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
    ],
    direction: "up",
    queuedDirection: "right",
    food: { x: 0, y: 0 },
    score: 3,
    gameOver: false,
    won: false,
  };

  const nextState = advanceGame(state, () => 0);

  assert.equal(nextState.gameOver, true);
});

test("spawnFood returns null when the grid is full", () => {
  const snake = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ];

  const food = spawnFood(2, snake, () => 0);

  assert.equal(food, null);
});

let failed = false;

for (const { name, fn } of tests) {
  try {
    fn();
    console.log(`PASS ${name}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${name}`);
    console.error(error);
  }
}

if (failed) {
  process.exitCode = 1;
} else {
  console.log(`All ${tests.length} tests passed.`);
}
