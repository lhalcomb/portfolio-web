import p5 from "p5";
import { DLXSolver } from "./DLXSolver";
import { IncidenceMatrix, Cell } from "./incidenceMatrix";
import { SudokuBoard } from "./sudokuBoard";

const cellSize: number = 600 / 9;

const impossibleGrid: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 8, 5],
  [0, 0, 1, 0, 2, 0, 0, 0, 0],
  [0, 0, 0, 5, 0, 7, 0, 0, 0],
  [0, 0, 4, 0, 0, 0, 1, 0, 0],
  [0, 9, 0, 0, 0, 0, 0, 0, 0],
  [5, 0, 0, 0, 0, 0, 0, 7, 3],
  [0, 0, 2, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 0, 0, 0, 9]
];

//let sudokuCSV: p5.Table;
let currentQuiz: number[][];                      
let currentGrid: number[][] = impossibleGrid;
let sudokuBoard: SudokuBoard;
let solvedGrid: number[][] | null = null;

let solveDLXbtn: p5.Element;
let resetBtn: p5.Element;
let randomBtn: p5.Element;

const sudokuSketch = (p: p5) => {

  // Helper Functions
//   function loadSudokuCSV(p: p5): Promise<p5.Table> {
//   return new Promise((resolve, reject) => {
//     p.loadTable("/sudoku.csv", "csv", "header", resolve, reject);
//   });
// }

  async function loadSudokuCSVManually(): Promise<string[]> {
    const response = await fetch("/sudoku.csv");
    const text = await response.text();

    const lines = text.trim().split("\n");
    const header = lines[0].trim();
    console.log(header);
    const quizzes = lines.slice(1).map(line => line.trim());

  return quizzes;
}



  // function sudokuQuiz(): void {
  //   for (let r = 0; r < sudokuCSV.getRowCount(); r++) {
  //     const quiz = sudokuCSV.getNum(r, "quizzes");
  //     console.log(quiz);
  //   }
  // }

  function pickRandomQuiz(quizzes: string[]): number[][] {
    // if (!sudokuCSV){
    //   console.warn("CSV not loaded yet. ");
    //   return currentGrid;
    // }
    // const r = Math.floor(p.random(sudokuCSV.getRowCount()));
    // const quizStr = sudokuCSV.getString(r, "quizzes");


    const quizStr = quizzes[Math.floor(p.random(quizzes.length))];

    currentQuiz = parseSudokuString(quizStr);
    return currentQuiz;
  }

  function parseSudokuString(quizStr: string): number[][] {
    const grid: number[][] = [];

    for (let row = 0; row < 9; row++) {
      const rowData: number[] = [];
      for (let col = 0; col < 9; col++) {
        const index = row * 9 + col;
        const val = parseInt(quizStr.charAt(index), 10);
        rowData.push(val);
      }
      grid.push(rowData);
    }

    return grid;
  }

  function extractSolutionGrid(solutions: Cell[]): number[][] {
  const grid = Array.from({ length: 9 }, () => Array(9).fill(0));

  for (const rowNode of solutions) {
    let node = rowNode;

    
    while (node.left && node.left !== rowNode) {
      node = node.left;
    }

    let rowIndex: number | null = null;
    let temp = node;
    do {
      if (temp.name && temp.name.startsWith("row->")) {
        rowIndex = parseInt(temp.name.split("->")[1]);
        break;
      }
      temp = temp.right ?? node; // prevent null traversal
    } while (temp !== node);

    if (rowIndex !== null) {
      const r = Math.floor(rowIndex / 81);
      const c = Math.floor((rowIndex % 81) / 9);
      const n = (rowIndex % 9) + 1;
      grid[r][c] = n;
    }
  }

  return grid;
}


  function solveDLX(grid: number[][]): Cell[] | null {
    const matrix = new IncidenceMatrix(grid);
    const solver = new DLXSolver(matrix);
    return solver.solve();
  }

  function renderSolving(solutions: Cell[] | null): void {
    if (solutions) {
      solvedGrid = extractSolutionGrid(solutions);
    } else {
      console.log("No solution found.");
    }
  }

  // Setup
  p.setup = async () => {
    p.createCanvas(600, 600);
    p.textFont("Arial");
    p.textSize(32);
    p.textAlign(p.CENTER, p.CENTER);

    window.addEventListener("error", (e) => {
      console.error("Runtime error caught:", e.message);
  });

    // try {
    //   sudokuCSV = await loadSudokuCSV(p);
    //   console.log("CSV loaded:", sudokuCSV.getRowCount());
    // } catch (err) {
    //   console.error("Failed to load sudoku.csv", err);
    // }

    sudokuBoard = new SudokuBoard(cellSize);

    const container = p.select("#button-container");
    const btnClass = 'px-4 py-2 bg-[#649568] text-black rounded border hover:bg-gray-800 transition duration-200';

    solveDLXbtn = p.createButton("Solve Sudoku w/ DLX")
    .class(btnClass)
    .parent(container);

    solveDLXbtn.mousePressed(() => {
      const solutions = solveDLX(currentGrid);
      renderSolving(solutions);
    });

    resetBtn = p.createButton("Impossible Grid")
    .class(btnClass)
    .parent(container);

    resetBtn.mousePressed(() => {
      solvedGrid = null;
      currentGrid = impossibleGrid;
      sudokuBoard.drawNumbers(p, currentGrid);
    });

    randomBtn = p.createButton("Random Sudoku")
    .class(btnClass)
    .parent(container);;
    randomBtn.mousePressed(async () => {
      solvedGrid = null;
      const quizzes = await loadSudokuCSVManually();
      currentGrid = pickRandomQuiz(quizzes);
      sudokuBoard.drawNumbers(p, currentGrid);
    });
  };

  p.draw = () => {
    p.background(0);
    sudokuBoard.drawGrid(p, 600);

    if (solvedGrid) {
      sudokuBoard.drawNumbers(p, solvedGrid);
    } else {
      sudokuBoard.drawNumbers(p, currentGrid);
    }
  };
};

export default sudokuSketch;
