 
import Cell from "./Cell";

export default class Maze {
    grid: Cell[]; 

  constructor(grid: Cell[]) {
    this.grid = grid;
  }

  initializeCosts(): void {
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].cost = Infinity;
      this.grid[i].parent = null;
    }
  }

  reconstruct_path(end: Cell): Cell[] {
    const path: Cell[] = [];
    let current: Cell | null = end;

    while (current) {
      path.push(current);
      current = current.parent;
    }

    return path.reverse();
  }

  getNeighborsWithoutWalls(cell: Cell, grid: Cell[]): Cell[] {
    const neighbors = [];

    const top = grid[cell.index(cell.x, cell.y - 1)];
    const right = grid[cell.index(cell.x + 1, cell.y)];
    const bottom = grid[cell.index(cell.x, cell.y + 1)];
    const left = grid[cell.index(cell.x - 1, cell.y)];

    if (top && !cell.walls.top) neighbors.push(top);
    if (right && !cell.walls.right) neighbors.push(right);
    if (bottom && !cell.walls.bottom) neighbors.push(bottom);
    if (left && !cell.walls.left) neighbors.push(left);

    return neighbors;
  }
}