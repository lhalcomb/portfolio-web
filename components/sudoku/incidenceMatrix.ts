export class Cell {
  left: Cell | null = null;
  right: Cell | null = null;
  up: Cell | null = null;
  down: Cell | null = null;
  col: Column | null = null;
  name: string | null = null;

  constructor(
    name: string | null = null,
    left: Cell | null = null,
    right: Cell | null = null,
    up: Cell | null = null,
    down: Cell | null = null,
    col: Column | null = null
  ) {
    this.left = left;
    this.right = right;
    this.up = up;
    this.down = down;
    this.col = col;
    this.name = name;
  }
}

export class Column extends Cell {
  size: number;

  constructor(size = 0, name: string | null = null) {
    super(name);
    this.size = size;
  }
}

export class Root extends Column {
  constructor() {
    super(0, 'root');
  }
}

export class IncidenceMatrix {
  columns: Column[];
  header: Root;
  sudoku_incidence: number[][];

  constructor(grid: number[][]) {
    this.header = new Root();
    this.columns = new Array<Column>(324).fill(null);
    this.sudoku_incidence = this.generateIncidenceMatrix(grid);
    this.createDoublyLinkedList();
  }

  shape() {
    return [this.sudoku_incidence.length, this.sudoku_incidence[0].length];
  }

  generateIncidenceMatrix(grid: number[][]) {
    const matrix = Array.from({ length: 729 }, () => Array(324).fill(0));
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        for (let num = 0; num < 9; num++) {
          const rowIndex = num + col * 9 + row * 81;

          if (grid[row][col] !== 0 && grid[row][col] - 1 !== num) continue;

          matrix[rowIndex][col + row * 9] = 1;
          matrix[rowIndex][81 + num + row * 9] = 1;
          matrix[rowIndex][162 + num + col * 9] = 1;

          const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
          matrix[rowIndex][243 + box * 9 + num] = 1;
        }
      }
    }
    return matrix;
  }

  createDoublyLinkedList() {
    this.createColumns();
    this.connectRows();
  }

  createColumns() {
    let prevCol: Cell = this.header;

    for (let colIndex = 0; colIndex < this.shape()[1]; colIndex++) {
      const name = `col->${colIndex}`;
      const col = new Column(0, name);

      col.left = prevCol;
      prevCol.right = col;

      this.columns[colIndex] = col;

      let prevRow: Cell = col;
      for (let rowIndex = 0; rowIndex < this.shape()[0]; rowIndex++) {
        if (this.sudoku_incidence[rowIndex][colIndex] !== 1) continue;

        const row = new Cell(`row->${rowIndex}`, null, null, null, null, col);
        col.size += 1;

        row.up = prevRow;
        prevRow.down = row;
        prevRow = row;
      }

      col.up = prevRow;
      prevRow.down = col;

      prevCol = col;
    }

    this.header.left = prevCol;
    prevCol.right = this.header;
  }

  connectRows() {
    for (let row = 0; row < this.shape()[0]; row++) {
      const onesInRow = this.onesInRow(row);
      if (onesInRow.length === 0) continue;

      const firstCell = this.getCellFromColumns(row, onesInRow[0]);
      if (!firstCell) continue;

      let prevCell = firstCell;

      for (let i = 1; i < onesInRow.length; i++) {
        const col = onesInRow[i];
        const cell = this.getCellFromColumns(row, col);
        if (!cell) continue;

        cell.left = prevCell;
        prevCell.right = cell;
        prevCell = cell;
      }

      firstCell.left = prevCell;
      prevCell.right = firstCell;
    }
  }

  getCellFromColumns(rowIndex: number, colIndex: number): Cell | null {
    if (this.sudoku_incidence[rowIndex][colIndex] === 0) return null;

    const col = this.columns[colIndex];
    let cell: Cell = col.down!;

    while (cell !== col) {
      if (cell.name && parseInt(cell.name.split('->')[1]) === rowIndex) {
        return cell;
      }
      cell = cell.down!;
    }

    return null;
  }

  onesInRow(row: number): number[] {
    return this.sudoku_incidence[row]
      .map((val, idx) => (val === 1 ? idx : -1))
      .filter(idx => idx !== -1);
  }

  printSparseMatrix(): void {
    const rows = [[this.header.name]];
    let col: Cell | null = this.header.right;

    while (col !== this.header) {
      const rowCells = [col.name];
      let row: Cell | null = col.down;

      while (row !== col) {
        rowCells.push(row.name);
        row = row.down;
      }

      rowCells.push(`column size->${(col as Column).size}`);
      rows.push(rowCells);

      col = col.right;
    }

    for (const row of rows) {
      console.log(row.join(', '));
    }
  }
}
