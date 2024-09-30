const Board =  require("../Boardfile/board.js");
const Player  = require("../Playerfile/player.js");
class Game{
   
    constructor(board , players , turn , isActive , winner , draw){
        this.board = board;
        this.players = players;
        this.turn = turn;
        this.isActive = isActive;
        this.winner = winner;
        this.draw = draw;
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

        return new Game(newBoard , players , 0 , true , null , false);

        
       } catch (error) {
         console.log(error);
       }

    }

    isActiveGame(){
        if(!this.isActive){
            if(this.draw == true){
                console.log("It's a draw!");
                return;
            }

            if(this.winner !== null){
                
                console.log(`Player ${this.winner.getName()} wins!`);
                return;
            }

        
        }

        return true;
    }

    play(cellNo){
       try {

         this.board.validateCellNo(cellNo);
         this.board.isCellEmpty(cellNo);
         if(!this.isActiveGame()){
            return;
         }


         let currentPlayer = this.players[this.turn % 2];
         let currentSymbol = currentPlayer.getSymbol();
        
         this.board.markCell(cellNo , currentSymbol);

         this.board.displayBoard();

         this.turn++;

        if (this.turn >= 5) {
            
            if (this.board.checkResult()) {
                  
                    console.log(`Player ${currentPlayer.getName()} wins!`);
                    this.isActive = false;
                    this.winner = currentPlayer;
                    return;
                }
            }

            if (this.turn === 8) {
                console.log("It's a draw!");
                this.draw = true;
                this.isActive = false;
                return;
        }
         

       } catch (error) {
         console.log(error);
       }
    }
}

module.exports = Game;