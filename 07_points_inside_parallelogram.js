const r = require("raylib");

function parallelogramPoints(p1, v1, v2) {
  const points = [];

  for (let i = 0; i < 100; i++) {
    const r1 = Math.random();
    const r2 = Math.random();
    const x = p1.x + v1.x * r1 + v2.x * r2;
    const y = p1.y + v1.y * r1 + v2.y * r2;
    points.push({ x, y });
  }

  return points;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Parallelogram",
    fps: 50,
  }

  const color = {
    r: 254,
    g: 221,
    b: 69,
    a: 200
  }

  const p1 = {
    x: 100,
    y: 200
  }

  const v1 = {
    x: 200,
    y: 50
  }

  const v2 = {
    x: 150,
    y: 150
  }

  const p2 = {
    x: p1.x + v1.x,
    y: p1.y + v1.y,
  }
  const p3 = {
    x: p1.x + v2.x,
    y: p1.y + v2.y,
  }
  const p4 = {
    x: p1.x + v1.x + v2.x,
    y: p1.y + v1.y + v2.y,
  }

  const pointsArr = parallelogramPoints(p1, v1, v2);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    color,
    p1, p2, p3,
    p4, v1, v2,
    pointsArr,
  };
}

function drawParallelogram(v1, v2, v3, v4) {
  r.DrawLineEx(v1, v2, 2, r.WHITE);
  r.DrawLineEx(v1, v3, 2, r.WHITE);
  r.DrawLineEx(v2, v4, 2, r.WHITE);
  r.DrawLineEx(v3, v4, 2, r.WHITE);
}

function drawPoints(points, color) {
  for (const point of points) {
    r.DrawCircleV(point, 3, color);
  }
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  drawParallelogram(w.p1, w.p2, w.p3, w.p4);
  drawPoints(w.pointsArr, w.color);

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