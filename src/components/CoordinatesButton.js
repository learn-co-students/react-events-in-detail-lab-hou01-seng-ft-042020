import React from 'react';
// Code CoordinatesButton Component Here
export default class CoordinatesButton extends React.Component {
  
  getCoords = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])

  }

  render() {
    return (
      <button onClick={this.getCoords}>Coordinates</button>
    )
  }
}