import React from "react";
import Tile from "./Tile";

export default class Board extends React.Component {
  constructor(props){
    super(props); 
  }

  render(){
    const grid = this.props.board.grid;
    return(
      <div className="board">
        {grid.map((row, i)=>{
          return (
            <div className="row" key={`r${i}`}> 
              {row.map((tile, j)=>{
                return( < Tile tile={tile} key={j} /> )
              })}
            </div>
          )
        })}
      </div>
    );
  }
}