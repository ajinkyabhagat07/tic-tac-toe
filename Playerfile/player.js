class Player{

    constructor(name , symbol){
        this.name = name;
        this.symbol = symbol;
    }

    static newPlayer(name , symbol){
        try {
            if(typeof name != "string"){
                throw new Error("player name is invalid");
            }

            if(typeof symbol != "string"){
                throw new Error("symbol is invalid");
            }

            return new Player(name , symbol);
            
        } catch (error) {
            throw error;
        }
    }

    getSymbol(){
        try {
           return this.symbol; 
        } catch (error) {
            throw error;
        }
    }

    getName(){
        try {
           return this.name; 
        } catch (error) {
            throw error;
        }
    }

}


module.exports = Player;