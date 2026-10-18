const r = require("raylib");

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
    b: 69,
    a: 150
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    color,
    radius
  };
}

function draw(w) {
  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  r.DrawCircleLines(0, 0, w.radius, r.RED);

  for (let i = 0; i < 100; i++) {
    const radiusOfPoint = Math.floor(Math.random() * w.radius);
    const radian = Math.floor(Math.random() * 360);
    const x = radiusOfPoint * Math.cos(radian);
    const y = radiusOfPoint * Math.sin(radian);

    r.DrawCircle(x, y, 4, w.color);

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