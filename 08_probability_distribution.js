const r = require("raylib");

function createRandomValue(max, length) {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    const num = Math.floor(Math.random() * max);

    randomArr.push(num);
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

  const length = 50;
  const xRandomValues = createRandomValue(screen.width, length);
  const yRandomValues = createRandomValue(screen.height, 50);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    xRandomValues,
    yRandomValues,
    length
  };
}

function draw(w) {
  const xValues = w.xRandomValues;
  const yValues = w.yRandomValues;
  // console.log(xValues, yValues);

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  for (let i = 0; i < w.length; i++) {
    r.DrawCircle(xValues[i], yValues[i], 3, r.RED);
  }

  // console.log(Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6))
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