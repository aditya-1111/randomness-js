const r = require("raylib");

function trianglePoints(p1, p2, p3) {
  const points = [];
  const minX = Math.min(p1.x, p2.x, p3.x);
  const maxX = Math.max(p1.x, p2.x, p3.x);

  const minY = Math.min(p1.y, p2.y, p3.y);
  const maxY = Math.max(p1.y, p2.y, p3.y);

  for (let i = 0; i < 100; i++) {
    const x = Math.random() * (maxX - minX) + minX;
    const y = Math.random() * (maxY - minY) + minY;
    points.push({ x, y });
  }

  return points;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "The Chaos Game",
    fps: 50,
  }

  const p1 = {
    x: 100,
    y: 200
  }

  const p2 = {
    x: 100,
    y: 350
  }

  const p3 = {
    x: 400,
    y: 200,
  }
  const point = {
    pos: {
      x: 150,
      y: 150,
    },
    radius: 1,
    color: r.RED,
  }

  const pointsArr = trianglePoints(p1, p2, p3);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    color,
    p1, p2, p3,
    pointsArr
  };
}

function drawTriangle(p1, p2, p3) {
  r.DrawLineEx(p1, p2, 2, r.WHITE);
  r.DrawLineEx(p1, p3, 2, r.WHITE);
  r.DrawLineEx(p2, p3, 2, r.WHITE);
}

function drawPoints(points, color) {
  for (const point of points) {
    r.DrawCircleV(point, 3, color);
  }
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  drawTriangle(w.p1, w.p2, w.p3);
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