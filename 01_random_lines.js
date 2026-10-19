const r = require("raylib");

function randomLines(length, width) {
  const array = [];

  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * width);

    array.push({ x, y: 0 });
  }

  return array;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Random Lines",
    fps: 50,
  }

  const length = 50;
  const linesPoints = randomLines(length, screen.width);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    linesPoints
  };
}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);

  for (const pos of w.linesPoints) {
    r.DrawLineV(pos, { x: pos.x, y: r.GetScreenHeight() }, r.WHITE);
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