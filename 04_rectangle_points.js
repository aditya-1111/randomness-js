const r = require("raylib");

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Random x coordinate",
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
    a: 100
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen,
    rect,
    color
  };
}

function draw(w) {
  const radius = 4;
  const rect = w.rect;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  r.DrawRectangleLinesEx(rect, 1, r.WHITE);

  for (let i = 0; i < 200; i++) {
    const x = Math.floor(Math.random() * rect.width) + rect.x;
    const y = Math.floor(Math.random() * rect.height) + rect.y;

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