

interface Walls{
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
}; 


export default class Cell {
    x: number;
    y: number;
    cols: number;
    rows: number;
    w: number;
    visited: boolean;
    walls: Walls;
    cost: number;
    heuristic: number;
    parent: Cell | null;
     


  constructor(x: number, y: number, cols: number, rows: number, w: number, p5) {
    this.x = x;
    this.y = y;
    this.cols = cols;
    this.rows = rows;
    this.w = w;
    this.p5 = p5;

    this.visited = false;

    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true,
    };

    this.cost = Infinity;
    this.heuristic = 0.0;
    this.parent = null;
  }

  show() {
    const p = this.p5
    const x = this.x * this.w;
    const y = this.y * this.w;

    p.stroke(0, 71, 171);
    if (this.walls.top) p.line(x, y, x + this.w, y);
    if (this.walls.right) p.line(x + this.w, y, x + this.w, y + this.w);
    if (this.walls.bottom) p.line(x + this.w, y + this.w, x, y + this.w);
    if (this.walls.left) p.line(x, y + this.w, x, y);

    if (this.visited) {
      p.noStroke();
      p.fill(255, 6, 0, 255);
      p.rect(x, y, this.w, this.w);
    }
  }

  // Get index of neighbor
  index(x: number, y: number): number {
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) {
      return -1;
    }
    return x + y * this.cols;
  }

  // Check unvisited neighbors
  checkNeighbors(grid: Cell[]): Cell | undefined {
    const neighbors: Cell[] = [];

    const top = grid[this.index(this.x, this.y - 1)];
    const right = grid[this.index(this.x + 1, this.y)];
    const bottom = grid[this.index(this.x, this.y + 1)];
    const left = grid[this.index(this.x - 1, this.y)];

    if (top && !top.visited) neighbors.push(top);
    if (right && !right.visited) neighbors.push(right);
    if (bottom && !bottom.visited) neighbors.push(bottom);
    if (left && !left.visited) neighbors.push(left);

    if (neighbors.length > 0) {
      const r = Math.floor(this.p5.random(neighbors.length));
      return neighbors[r];
    } else {
      return undefined;
    }
  }

  heuristicManhattan(end: Cell): number {
    return Math.abs(this.x - end.x) + Math.abs(this.y - end.y);
  }
}
