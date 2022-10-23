const {Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const height = 600;
const width = 600;

const engine = Engine.create();
const {world} = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width,
    height
  }
});

Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const topWall = Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true});
const bottomWall = Bodies.rectangle(width / 2, height, width, 40, { isStatic: true});
const leftWall = Bodies.rectangle(0, height / 2, 40, height, { isStatic: true});
const rightWall = Bodies.rectangle(width, height / 2, 40, height, { isStatic: true});

const walls = [
  topWall,
  bottomWall,
  leftWall,
  rightWall
];

World.add(world, walls);

//Maze generation

// const grid = Array(cells).fill(null).map(()=> Array(cells).fill(false))
const grid = Array(cells).fill(Array(cells).fill(false))

const verticals = Array(cells).fill(null).map(()=> Array(cells - 1).fill(false));
const horizontals = Array(cells-1).fill(null).map(()=> Array(cells).fill(false))
console.log(grid, verticals, horizontals)
