import React from 'react';

class WinLoseModal extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   contents: ''
    // }
    // this.setContents = this.setContents.bind(this);
  }

  // setContents(){
  //   if(this.props.won){
  //     this.setState({
  //       contents: 'YOU WON ;)'
  //     })
  //   }else{
  //     this.setState({
  //     contents: "YOU'RE A GIANT LOSER ;("
  //     })
  //   }
  // }

  // componentDidMount(){
  //   this.setContents();
  // }

  render(){
  
    return (
      <div className="modal-screen">
        <div className="modal">
          <div className="won">
            <h1>YOU WON ;)</h1>
          </div>
          <div className="lost">
            <h1>YOU'RE A GIANT LOSER ;(</h1>
          </div>
        </div>
      </div>
  )
  }

}

export default WinLoseModal;



