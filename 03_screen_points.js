const r = require("raylib");

function circlePoints(length, width, height) {
  const points = [];

  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    points.push({ x, y });
  }

  return points;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Points On Screen",
    fps: 50,
  }

  const color = {
    r: 255,
    g: 255,
    b: 255,
    a: 100
  }

  const points = circlePoints(100, screen.width, screen.height);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    color,
    points
  };
}

function draw(w) {
  const sc = w.screen;
  const radius = 10;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  for (const point of w.points) {
    r.DrawCircleV(point, radius, w.color);
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