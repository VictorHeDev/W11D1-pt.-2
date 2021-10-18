import React from "react";
import * as Minesweeper from "./minesweeper";
import Board from "./Board";
import { WinLoseModal } from "./Modal"

class Game extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9,4)
    }
    this.updateGame = this.updateGame.bind(this);
    this.WinLoseModal = WinLoseModal(false);
  }

  updateGame(tile, flagged){
    if(flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board })
  }

  render() {
    return(
      <div>
        < Board board={this.state.board} updateGame={this.updateGame} />
        < WinLoseModal {} />
      </div>
    )
  }
}

export default Game;