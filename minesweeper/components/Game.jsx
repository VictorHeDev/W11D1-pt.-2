import React from "react";
import * as Minesweeper from "./minesweeper";
import Board from "./Board";
import WinLoseModal from "./Modal"

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9,4)
    }
    this.updateGame = this.updateGame.bind(this);
    // console.log(this.state.board.lost())
  }

  updateGame(tile, flagged){
    // console.log(tile.pos) --> finish later!
    if(flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
    
    
    const modal = document.querySelector('.modal-screen');

    if(this.state.board.won()){
      const won = document.querySelector(".won");
      won.classList.add("display")
      modal.classList.add("display");

    }else if(this.state.board.lost()){
      const lost = document.querySelector(".lost");
      lost.classList.add("display")
      modal.classList.add("display");

    }
  }

  render() {
    return(
      <div>
        < Board board={this.state.board} updateGame={this.updateGame} />
        < WinLoseModal won={this.state.board.won}  />
      </div>
    )
  }
}

export default Game;