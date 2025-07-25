import p5 from "p5"; 

export class SudokuBoard{
    cellSize: number;

    constructor(cellSize: number){
        this.cellSize = cellSize;
    }

  drawGrid(p5: p5, size: number): void{
    for (let i = 0; i < 9; i++){
      const lineThickness = (i % 3 == 0) ? 3 : 1;
      p5.stroke(43, 83, 41)
      p5.strokeWeight(lineThickness);
      p5.line(0, i * this.cellSize, size, i * this.cellSize);
      p5.line(i * this.cellSize, 0,  i * this.cellSize, size);
    }
  }
  
  drawNumbers(p5: p5, sudokuGrid: number[][]): void {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const val = sudokuGrid[i][j];
        if (val !== 0) {
          p5.fill(100, 149, 104);
          p5.text(val, j * this.cellSize + this.cellSize / 2, i * this.cellSize + this.cellSize / 2);
        }
      }
    }
  }
  
  
}