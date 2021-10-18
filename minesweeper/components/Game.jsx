import React from "react";
import * as Minesweeper from "./minesweeper";
import Board from "./Board";

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9,4)
    }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(){

  }

  render() {
    return( 
      <div>
        < Board board={this.state.board} updateGame={this.updateGame} />
      </div>
     )
  }
}

export default Game;