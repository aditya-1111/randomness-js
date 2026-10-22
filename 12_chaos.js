const r = require("raylib");

function chooseCorner(corners) {
  const idx = Math.floor(Math.random() * corners.length);

  return corners[idx];
}

function getHalfway(corner, point) {
  const x = (corner.x + point.x) / 2;
  const y = (corner.y + point.y) / 2;

  return { x, y };
}

function trianglePoints(start, length, corners) {
  const pointsArr = [];

  let point = start;
  for (let i = 0; i < length; i++) {
    const corner = chooseCorner(corners);
    const halfway = getHalfway(corner, point);

    point = halfway;
    pointsArr.push(halfway);
  }

  return pointsArr;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "The Chaos Game",
    fps: 50,
  }

  const p1 = {
    x: 275,
    y: 200
  }

  const p2 = {
    x: 50,
    y: 500
  }

  const p3 = {
    x: 550,
    y: 500,
  }

  const corners = [p1, p2, p3];

  const point = {
    pos: {
      x: 150,
      y: 250,
    },
    radius: 3,
    color: r.RED,
  }

  const length = 10000;

  const pointsArr = trianglePoints(point.pos, length, corners);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    p1, p2, p3,
    pointsArr,
    point
  };
}

function drawTriangle(p1, p2, p3) {
  r.DrawLineEx(p1, p2, 2, r.WHITE);
  r.DrawLineEx(p1, p3, 2, r.WHITE);
  r.DrawLineEx(p2, p3, 2, r.WHITE);
}

function drawPoints(points) {
  for (const point of points) {
    r.DrawCircleV(point, 1, r.WHITE);
  }
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.BLACK);

  drawTriangle(w.p1, w.p2, w.p3);
  drawPoints(w.pointsArr);

  // r.DrawCircleV(w.point.pos, w.point.radius, w.point.color);

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