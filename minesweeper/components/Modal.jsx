import React from 'react';

export const WinLoseModal = (props) => {
  super(props)
  const won = 'YOU WON ;)'
  const lost = "YOU'RE A GIANT LOSER ;("
  let contents = ''

  if (boolean) {
    contents = won
  } else {
    contents = lost
  }

  // console.log(contents)
  return (
    <div className="modal-screen">
      <div className="modal">
        <h1>{contents}</h1>
      </div>
    </div>
  )
}



