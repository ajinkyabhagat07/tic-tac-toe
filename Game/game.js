const Board =  require("../Boardfile/board.js");
const Player  = require("../Playerfile/player.js");
class Game{
    constructor(board , players , turn){
        this.board = board;
        this.players = players;
        this.turn = turn;
    }


    static newGame(playerA , playerB){

       try {

        if(playerA === playerB){
            throw new Error("Both players name are same, enter different name")
        }

        let newBoard = Board.newBoard();

        let p1 = Player.newPlayer(playerA , "X");
        let p2 = Player.newPlayer(playerB , "O");

        let players = [p1 , p2];

        return new Game(newBoard , players , 0);

        
       } catch (error) {
         console.log(error);
       }

    }

    play(cellNo){
       try {
         this.board.validateCellNo(cellNo);
         this.board.isCellEmpty(cellNo);

         let currentPlayer = this.players[this.turn % 2];
         let currentSymbol = currentPlayer.getSymbol();
        
         this.board.markCell(cellNo , currentSymbol);

         this.board.displayBoard();

         this.turn++;

        if (this.turn >= 5) {
            
            if (this.board.checkResult()) {
                    console.log(`Player ${currentPlayer.getName()} wins!`);
                    return;
                }
            }

            if (this.turn === 9) {
                console.log("It's a draw!");
                return;
        }
         

       } catch (error) {
         console.log(error);
       }
    }
}

module.exports = Game;