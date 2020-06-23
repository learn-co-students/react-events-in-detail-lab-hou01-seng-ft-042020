// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends React.Component {

  handleClick = e => {
    e.persist()
    console.log(e.persist)
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
    
  }

  // handleClickTwo = e => {
  //   console.log(e.target)
  // }

  render(){
    return <button onClick={this.handleClick}>Delayed Button</button>

  }
}

export default DelayedButton
