import Cell from "./Cell";

interface QueueElement{
    item: Cell;
    priority: number;
}
export default class PriorityQueue {
    elements: QueueElement[];
  constructor() {
    this.elements = [];
  }

  enqueue(item: Cell, priority: number): void {
    this.elements.push({ item, priority });
    this.elements.sort((a, b) => a.priority - b.priority); // Min-heap behavior
  }

  dequeue(): Cell {
    return this.elements.shift()!.item; // Remove and return item with lowest priority, ! tells typescript that the method isn't defined
  }

  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  
  includes(cell: Cell): boolean{
    return this.elements.some(el => el.item == cell);
  }
}