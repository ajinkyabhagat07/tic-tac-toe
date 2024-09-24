const cell = require("../Cells/cells");

class Board{

    constructor(cells){
        this.cells = cells;
    }


    static newBoard(){
        let cells = [];
        for(let i=0; i<9; i++){
            cells.push(cell.newCells());
        }

        return new Board(cells);
    }

    validateCellNo(cellNo){
        try {
            if(cellNo < 0){
                throw new Error("invalid cell No (0-8)")
            }
            if(cellNo > 8){
                throw new Error("invalid cell No (0-8)")
            }
        } catch (error) {
            throw error;
        }
    }

    isCellEmpty(cellNo){
        try {
            this.cells[cellNo].isEmpty();
        } catch (error) {
            throw error;
        }
    }

    markCell(cellNo , currentSymbol){
        try {
           this.cells[cellNo].markCell(currentSymbol); 
        } catch (error) {
           throw error; 
        }
    }

    checkResult() {
        // rows
        if (this.cells[0].getSymbol() === this.cells[1].getSymbol() && this.cells[0].getSymbol() === this.cells[2].getSymbol() && this.cells[0].getSymbol() !== " ") {
            return true;
        }
        if (this.cells[3].getSymbol() === this.cells[4].getSymbol() && this.cells[3].getSymbol() === this.cells[5].getSymbol() && this.cells[3].getSymbol() !== " ") {
            return true;
        }
        if (this.cells[6].getSymbol() === this.cells[7].getSymbol() && this.cells[6].getSymbol() === this.cells[8].getSymbol() && this.cells[6].getSymbol() !== " ") {
            return true;
        }

        // columns
        if (this.cells[0].getSymbol() === this.cells[3].getSymbol() && this.cells[0].getSymbol() === this.cells[6].getSymbol() && this.cells[0].getSymbol() !== " ") {
            return true;
        }
        if (this.cells[1].getSymbol() === this.cells[4].getSymbol() && this.cells[1].getSymbol() === this.cells[7].getSymbol() && this.cells[1].getSymbol() !== " ") {
            return true;
        }
        if (this.cells[2].getSymbol() === this.cells[5].getSymbol() && this.cells[2].getSymbol() === this.cells[8].getSymbol() && this.cells[2].getSymbol() !== " ") {
            return true;
        }

        // diagonals
        if (this.cells[0].getSymbol() === this.cells[4].getSymbol() && this.cells[0].getSymbol() === this.cells[8].getSymbol() && this.cells[0].getSymbol() !== " ") {
            return true;
        }
        if (this.cells[2].getSymbol() === this.cells[4].getSymbol() && this.cells[2].getSymbol() === this.cells[6].getSymbol() && this.cells[2].getSymbol() !== " ") {
            return true;
        }

        return false;
    }

}

module.exports = Board;