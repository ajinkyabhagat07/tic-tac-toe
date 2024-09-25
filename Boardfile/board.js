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

    displayBoard(){
            
            console.log(`
                 ${this.cells[0].getSymbol() || ' '} | ${this.cells[1].getSymbol() || ' '} | ${this.cells[2].getSymbol() || ' '}
                -----------
                 ${this.cells[3].getSymbol() || ' '} | ${this.cells[4].getSymbol() || ' '} | ${this.cells[5].getSymbol() || ' '}
                -----------
                 ${this.cells[6].getSymbol() || ' '} | ${this.cells[7].getSymbol() || ' '} | ${this.cells[8].getSymbol() || ' '}
                `);
    }

   

    checkResult(){
        try {
            const patterns = [
                0, 1, 2,   
                3, 4, 5,   
                6, 7, 8,   
                0, 3, 6, 
                1, 4, 7,
                2, 5, 8,  
                0, 4, 8, 
                2, 4, 6   
            ];

            for(let i =0; i<patterns.length; i += 3){
                let a = patterns[i];
                let b = patterns[i+1];
                let c = patterns[i+2];

                if(this.cells[a].getSymbol() === this.cells[b].getSymbol() && this.cells[b].getSymbol() === this.cells[c].getSymbol() && this.cells[a].getSymbol() !== " "){
                    return true;
                }

            }

            return false;

        } catch (error) {
            throw error;
        }
    }

}

module.exports = Board;