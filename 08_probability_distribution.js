const r = require("raylib");

function getRandom(max, times) {
  let sum = 0;

  for (let i = 0; i < times; i++) {
    sum += Math.floor(Math.random() * max)
  }

  return sum / times;
}

function createRandom(width, height, length) {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    const x = getRandom(width, 10);
    const y = getRandom(height, 10);

    randomArr.push({ x, y });
  }

  return randomArr;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Probability Distribution",
    fps: 50,
  }

  const length = 200;
  const randoms = createRandom(screen.width, screen.height, length);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    randoms,
  };
}

function draw(w) {
  const values = w.randoms;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  for (const vec of values) {
    r.DrawCircleV(vec, 6, r.WHITE);
  }

  r.EndDrawing();
}

function loop(world) {
  while (!r.WindowShouldClose()) {
    draw(world);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const world = setup();
  loop(world);
  teardown();
}

main();