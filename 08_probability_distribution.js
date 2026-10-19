const r = require("raylib");

function createRandom(width, height, length) {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);

    randomArr.push({ x, y });
  }

  return randomArr;
}

function createRandom2(width, height, length) {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    const x = (Math.floor(Math.random() * width) + Math.floor(Math.random() * width)) / 2;
    const y = (Math.floor(Math.random() * height) + Math.floor(Math.random() * height)) / 2;

    randomArr.push({ x, y });
  }

  return randomArr;
}

function createRandom3(width, height, length) {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    const x =
      (
        Math.floor(Math.random() * width)
        + Math.floor(Math.random() * width)
        + Math.floor(Math.random() * width)
      ) / 3;
    const y =
      (
        Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
      ) / 3;

    randomArr.push({ x, y });
  }

  return randomArr;
}

function createRandom4(width, height, length) {
  const randomArr = [];
  for (let i = 0; i < length; i++) {
    const x =
      (
        Math.floor(Math.random() * width)
        // + Math.floor(Math.random() * width)
        // + Math.floor(Math.random() * width)
        // + Math.floor(Math.random() * width)
        // + Math.floor(Math.random() * width)
        // + Math.floor(Math.random() * width)
      );
    const y =
      (
        Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
        + Math.floor(Math.random() * height)
      ) / 7;

    randomArr.push({ x, y });
  }

  return randomArr;
}

function setup() {
  const screen = {
    width: 600,
    height: 600,
    title: "Probability Distribution",
    fps: 50,
  }

  const length = 100;
  const randoms = createRandom(screen.width, screen.height, length);
  const randoms2 = createRandom2(screen.width, screen.height, length);
  const randoms3 = createRandom3(screen.width, screen.height, length);
  const randoms4 = createRandom4(screen.width, screen.height, length);

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(screen.width, screen.height, screen.title);
  r.SetTargetFPS(screen.fps);

  return {
    randoms,
    randoms2,
    randoms3,
    randoms4,
  };
}

function draw(w) {
  const values = w.randoms;
  const values2 = w.randoms2;
  const values3 = w.randoms3;
  const values4 = w.randoms4;

  r.BeginDrawing();

  r.ClearBackground(r.DARKBLUE);

  // for (const vec of values) {
  //   r.DrawCircleV(vec, 6, r.WHITE);
  // }

  // for (const vec of values2) {
  //   r.DrawCircleV(vec, 6, r.YELLOW);
  // }

  // for (const vec of values3) {
  //   r.DrawCircleV(vec, 6, r.BEIGE);
  // }

  for (const vec of values4) {
    r.DrawCircleV(vec, 6, r.ORANGE);
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