const r = require("raylib");

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Random point in a circle",
    fps: 50,
  }

  const color = {
    r: 254,
    g: 221,
    b: 69,
    a: 150
  }

  const radius = 200;

  const origin = {
    x: 300,
    y: 250,
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    radius,
    color,
    origin
  };
}

function draw(w) {
  const origin = w.origin;
  const radius = w.radius;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  r.DrawCircleLines(origin.x, origin.y, radius, r.RED);

  for (let i = 0; i < 100; i++) {
    const pointRadius = Math.floor(Math.random() * radius);
    const radian = Math.floor(Math.random() * 360);

    const x = pointRadius * Math.cos(radian) + origin.x;
    const y = pointRadius * Math.sin(radian) + origin.y;

    r.DrawCircle(x, y, 5, r.YELLOW);
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