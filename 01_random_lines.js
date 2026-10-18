const r = require("raylib");

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Random Lines",
    fps: 50,
  }

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    screen
  };
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.DARKBLUE);

  for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * r.GetScreenWidth());
    r.DrawLine(x, 0, x, r.GetScreenHeight(), r.WHITE)
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