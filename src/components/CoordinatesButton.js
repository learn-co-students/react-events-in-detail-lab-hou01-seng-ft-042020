// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    xyCoordinates = event => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x, y])

    }

    render() {
        return <button onClick={this.xyCoordinates}></button>
    }
}