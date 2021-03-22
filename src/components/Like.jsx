import React, { Component } from "react";

class Like extends Component {
  state = {
    count: 0
  }

  incrementLike = () => {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }
    
  render() {
    return (
      
        <button onClick={this.incrementLike}>Yeet! {this.state.count}</button>
      
    )
  }
}

export default Like;


//Credit to https://medium.com/@elle.westervelt/create-a-basic-like-button-in-react-5274a6991385 