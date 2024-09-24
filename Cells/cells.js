class Cell{
    constructor(symbol){
        this.symbol = symbol;
    }

    static newCells(){
        return new Cell(" ");
    }

    isEmpty(){
        try {
            return this.symbol === " ";
        } catch (error) {
            throw error;
        }
    }

    markCell(symbol){
        this.symbol = symbol;
    }

    getSymbol(){
        return this.symbol;
    }
}

module.exports = Cell;