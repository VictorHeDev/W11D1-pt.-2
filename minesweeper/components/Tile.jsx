import React from "react";

export default class Tile extends React.Component {
  constructor(props){
    super(props);
    this.isBombed = this.isBombed.bind(this);
    this.isFlagged = this.isFlagged.bind(this);
    this.isExplored = this.isExplored.bind(this);
    this.determineTileContents = this.determineTileContents.bind(this);
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
    if (this.isBombed()) {
      return "💣"
    } else if (this.isFlagged()) {
      return "🚩"
    } else if (this.isExplored() && this.numSurroundingBombs() > 0) {
      return this.numSurroundingBombs();
    } else {
      return " "
    }
  }

  render(){
    return (
      <div className="tile">
        {this.determineTileContents()}
      </div>
    )
  }
}