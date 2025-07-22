// components/maze/mazeSketch.ts
import { type Sketch } from "@p5-wrapper/react";
import Cell from "./Cell";
import Maze from "./Maze";
import PriorityQueue from "./PriorityQueue";

const w = 18;
let cols: number;
let rows: number;
let grid: Cell[] = [];
let stack: Cell[] = [];
let current: Cell;
let maze: Maze;
let path: Cell[] = [];

let startCell: Cell;
let endCell: Cell;
let openSet: PriorityQueue;
let closedSet: Set<Cell>;
let aStarRunning = false;
let aStarFinished = false;

console.log("reached the maze sketch file");

const mazeSketch: Sketch = (p5) => {
    console.log("mazeSketch function loaded");
    p5.setup = () => {
        p5.createCanvas(540, 540, p5.WEBGL);
        console.log("set up canvas");
        cols = Math.floor(p5.width / w);
        rows = Math.floor(p5.height / w);
        grid = [];

        for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            grid.push(new Cell(x, y, cols, rows, w, p5));
        }
        }

        current = grid[0];
        maze = new Maze(grid);
        maze.initializeCosts();
        stack = [current];

        const btn = p5.createButton("Solve Maze!");
        btn.mousePressed(() => {
        if (!aStarRunning && !aStarFinished) {
            startCell = grid[0];
            endCell = grid[grid.length - 1];
            maze.initializeCosts();

            startCell.cost = 0;
            startCell.heuristic = startCell.heuristicManhattan(endCell);

            openSet = new PriorityQueue();
            closedSet = new Set();
            path = [];

            openSet.enqueue(startCell, startCell.cost + startCell.heuristic);
            aStarRunning = true;
        }
        });
    };

  p5.draw = () => {
    p5.background(220);
    for (const cell of grid) {
      cell.show();
    }

    if (stack.length > 0) {
      stepDFS();
    } else if (aStarRunning) {
      aStarStep();
    }

    drawPath(p5);
  };

  const removeWalls = (a: Cell, b: Cell): void => {
    const x = a.x - b.x;
    if (x === 1) {
        a.walls.left = false;
        b.walls.right = false;
    } else if (x === -1) {
        a.walls.right = false;
        b.walls.left = false;
    }

    const y = a.y - b.y;
    if (y === 1) {
        a.walls.top = false;
        b.walls.bottom = false;
    } else if (y === -1) {
        a.walls.bottom = false;
        b.walls.top = false;
    }
}

  const stepDFS = () => {
    const cell: Cell | undefined = stack.pop();
    if (!cell) return; 
    cell.visited = true;
    const next = cell.checkNeighbors(grid);
    if (next) {
      next.visited = true;
      stack.push(cell);
      stack.push(next);
      removeWalls(cell, next);
    }
  };

  const aStarStep = () => {
    if (!openSet.isEmpty()) {
      const current = openSet.dequeue(); // possible to change current to currentNode
      closedSet.add(current);

      if (current === endCell) {
        aStarRunning = false;
        aStarFinished = true;
        path = maze.reconstruct_path(current);
        return;
      }

      const neighbors = maze.getNeighborsWithoutWalls(current, grid);
      for (const neighbor of neighbors) {
        if (closedSet.has(neighbor)) continue;

        const moveCost = current.cost + 1;
        if (moveCost < neighbor.cost) {
          neighbor.cost = moveCost;
          neighbor.heuristic = neighbor.heuristicManhattan(endCell);
          neighbor.parent = current;

          if (!openSet.includes(neighbor)) {
            openSet.enqueue(neighbor, neighbor.cost + neighbor.heuristic);
          }
        }
      }

      path = maze.reconstruct_path(current);
    } else {
      aStarRunning = false;
      aStarFinished = true;
    }
  };

  const drawPath = (p5) => {
    p5.noFill();
    p5.stroke(0, 255, 0, 150);
    p5.strokeWeight(2);
    p5.beginShape();
    for (let i = 0; i < path.length; i++) {
      const x = path[i].x * w + w / 2;
      const y = path[i].y * w + w / 2;
      p5.vertex(x, y);
    }
    p5.endShape();
  };
};

export default mazeSketch;