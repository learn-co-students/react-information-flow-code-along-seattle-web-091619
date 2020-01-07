import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = (Ccolor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: Ccolor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child onHandleColorChange={this.changeColor} color={this.state.childrenColor}/>
        <Child onHandleColorChange={this.changeColor} color={this.state.childrenColor}/>
      </div>
    )
  }
}

export default Parent
