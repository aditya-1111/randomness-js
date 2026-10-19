const r = require("raylib");

function circlePoints(length, rect) {
  const points = [];

  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * rect.width) + rect.x;
    const y = Math.floor(Math.random() * rect.height) + rect.y;

    points.push({ x, y });
  }

  return points;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Rectangle Points",
    fps: 50,
  }

  const rect = {
    x: 100,
    y: 100,
    width: 300,
    height: 200,
  }

  const color = {
    r: 255,
    g: 255,
    b: 255,
    a: 200
  }

  const length = 100;
  const points = circlePoints(length, rect);
  const radius = 4;

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    color,
    points,
    radius,
    rect
  };
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  r.DrawRectangleLinesEx(w.rect, 1, r.WHITE);

  for (const point of w.points) {
    r.DrawCircleV(point, w.radius, w.color);
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