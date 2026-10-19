const r = require("raylib");

function randomLines(length, start, end) {
  const array = [];

  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * (end - start + 1)) + start;

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

  const start = 200;
  const end = 500;

  const lines = randomLines(50, start, end);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    lines
  };
}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);

  for (const line of w.lines) {
    r.DrawLineV(line, { x: line.x, y: r.GetScreenHeight() }, r.WHITE);
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