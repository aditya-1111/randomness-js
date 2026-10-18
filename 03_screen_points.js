const r = require("raylib");

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

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    color
  };
}

function draw(w) {
  const sc = w.screen;
  const radius = 10;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  for (let i = 0; i < 100; i++) {
    const x = Math.floor(Math.random() * sc.width);
    const y = Math.floor(Math.random() * sc.height);

    r.DrawCircle(x, y, radius, w.color);
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