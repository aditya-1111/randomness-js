const r = require("raylib");

function distance(point, circle) {
  const xDist = (point.x - circle.x) ** 2;
  const yDist = (point.y - circle.y) ** 2;

  return (xDist + yDist) ** 0.5;
}

function isInCircle(point, circle) {
  return distance(point, circle) < circle.radius;
}

function createPoints(rect, length) {
  const points = [];

  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * rect.width) + rect.x;
    const y = Math.floor(Math.random() * rect.height) + rect.y;

    points.push({ x, y });
  }

  return points;
}

function groupPoints(points, circle) {
  let pointsInside = 0;

  for (const point of points) {
    pointsInside += isInCircle(point, circle) ? 1 : 0;
  }

  return pointsInside;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Monte Carlo",
    fps: 50,
  }

  const circle = {
    x: 150,
    y: 150,
    radius: 20,
  }

  const rect = {
    x: 50,
    y: 50,
    width: 200,
    height: 200
  }

  const points = createPoints(rect, 1000);
  const pointsInside = groupPoints(points, circle);

  const squarePoints = points.length;
  const ratioOfPoints = pointsInside / squarePoints;

  const areaOfSquare = rect.width * rect.height;
  const areaOfCircle = ratioOfPoints * areaOfSquare;

  const text = {
    x: 10,
    y: 0,
    title: `Area of circle: ${areaOfCircle}`,
    size: 30,
    color: r.DARKBLUE,
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    rect,
    circle,
    points,
    text
  };
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.WHITE);

  r.DrawRectangleRec(w.rect, r.BLACK);
  r.DrawCircleV(w.circle, w.circle.radius, r.LIGHTGRAY);

  for (const point of w.points) {
    r.DrawCircleV(point, 1, r.RED);
  }

  r.DrawText(w.text.title, w.text.x, w.text.y, w.text.size, w.text.color);

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