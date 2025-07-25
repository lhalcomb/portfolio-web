import { IncidenceMatrix } from "./incidenceMatrix";

import type { Cell, Column } from "./incidenceMatrix"; 

export class DLXSolver {
  root: Column;           
  solutions: Cell[];

  constructor(matrix: IncidenceMatrix) {
    this.root = matrix.header;
    this.solutions = [];
  }

  solve(): Cell[] | null {
    if (this.root.right === this.root) {
      return this.solutions;
    }

    const column = this.choose_column();
    this.cover(column);

    let row = column.down!;
    while (row !== column) {
      this.solutions.push(row);

      let right_node = row.right!;
      while (right_node !== row) {
        this.cover(right_node.col!);
        right_node = right_node.right!;
      }

      const result = this.solve();
      if (result) return result;

      this.solutions.pop();

      let left_node = row.left!;
      while (left_node !== row) {
        this.uncover(left_node.col!);
        left_node = left_node.left!;
      }

      row = row.down!;
    }

    this.uncover(column);
    return null;
  }

  choose_column(): Column {
    let col = this.root.right as Column;
    let min_col = col;
    let min_size = col.size;

    while (col !== this.root) {
      if (col.size < min_size) {
        min_col = col;
        min_size = col.size;
      }
      col = col.right as Column;
    }

    return min_col;
  }

  cover(column: Column): void {
    column.right!.left = column.left!;
    column.left!.right = column.right!;

    let row = column.down!;
    while (row !== column) {
      let cell = row.right!;
      while (cell !== row) {
        cell.down!.up = cell.up!;
        cell.up!.down = cell.down!;
        cell.col!.size -= 1;
        cell = cell.right!;
      }
      row = row.down!;
    }
  }

  uncover(column: Column): void {
    let node = column.up!;
    while (node !== column) {
      let cell = node.left!;
      while (cell !== node) {
        cell.col!.size += 1;
        cell.down!.up = cell;
        cell.up!.down = cell;
        cell = cell.left!;
      }
      node = node.up!;
    }

    column.right!.left = column;
    column.left!.right = column;
  }
}
