import React from "react";

export default class Tile extends React.Component {
  constructor(props){
    super(props);
    this.isBombed = this.isBombed.bind(this);
    this.isFlagged = this.isFlagged.bind(this);
    this.isExplored = this.isExplored.bind(this);
    this.determineTileContents = this.determineTileContents.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  isBombed() {
    return this.props.tile.bombed
  }

  isFlagged() {
    return this.props.tile.flagged
  }

  isExplored() {
    return this.props.tile.explored
  }

  numSurroundingBombs() {
    return this.props.tile.adjacentBombCount()
  }

  determineTileContents() {
    // if adj bomb count === 0
    // && isn't ^^^ display nothing
    const tile = document.getElementById(this.props.tile.pos);
    if (this.isFlagged()) {
      return "🚩"
    } else if (this.isBombed()) {
      // return "💣"
      return " "
    } else if (this.isExplored() && this.numSurroundingBombs() > 0) {
      tile.classList.add("explored");
      return this.numSurroundingBombs();
    } else if (this.isExplored()){
      tile.classList.add("explored");
    }else {
      return " "
    }
  }

  handleClick(event){
    const altKey = event.altKey;
    const tile = this.props.tile;
    if(altKey){
      this.props.updateGame(tile, true);
    }else{
      this.props.updateGame(tile, false);
    }

    if(!altKey && this.isBombed()) {

    }
  }

  render(){
    return (
      <div className="tile" onClick={this.handleClick} id={this.props.tile.pos}>
        {this.determineTileContents()}
      </div>
    )
  }
}