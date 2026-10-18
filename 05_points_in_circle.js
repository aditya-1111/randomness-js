const r = require("raylib");

function getRadian(degree) {
  return (degree * Math.PI) / 180;
}

function createRandomPoints(radius, length) {

  const points = [];

  for (let i = 0; i < length; i++) {
    const pointRadius = Math.floor(Math.random() * radius);
    const radian = getRadian(Math.floor(Math.random() * 90));

    const x = pointRadius * Math.cos(radian);
    const y = pointRadius * Math.sin(radian);
    points.push({ x, y });
  }


  return points;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Random point in a circle",
    fps: 50,
  }

  const radius = 200;
  const color = {
    r: 254,
    g: 221,
    b: 79,
    a: 200
  }

  const length = 200;
  const pointsArray = createRandomPoints(radius, length);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    radius,
    color,
    pointsArray
  };
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  r.DrawCircleLines(0, 0, w.radius, r.WHITE);

  const points = w.pointsArray;
  for (let i = 0; i < points.length; i++) {
    r.DrawCircleV(points[i], 4, w.color);
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