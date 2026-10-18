const r = require("raylib");

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Parallelogram",
    fps: 50,
  }

  const color = {
    r: 255,
    g: 255,
    b: 255,
    a: 100
  }

  const v1 = {
    x: 100,
    y: 200
  }

  const v2 = {
    x: 150,
    y: 100
  }

  const v3 = {
    x: 180,
    y: 200
  }

  const height = Math.abs(v1.y - v2.y);
  const width = Math.abs(v1.x - v3.x);

  const v4 = {

    y: v2.y
  }
  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    color,
    v1,
    v2,
    v3,
  };
}

function drawParallelogram(v1, v2, v3) {
  const width = v1.x - v2.x;
  const height = v1.y - v3.y;
  const v4 = { x: v4 };

  r.DrawLineEx(v1, v2, 2, r.WHITE);
  r.DrawLineEx(v1, v3, 2, r.WHITE);
  r.DrawLineEx(v2, v4, 2, r.WHITE);
  r.DrawLineEx(v3, v4, 2, r.WHITE);
}

function draw(w) {
  const v1 = w.v1;
  const v2 = w.v2;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  drawParallelogram(v1, v2, width, height);
  const x = Math.floor(Math.random() * v1.x) + width;
  r.DrawCircle(x, 100, 3, r.RED);
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