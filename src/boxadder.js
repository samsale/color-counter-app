import React, { Component } from 'react';
import ColorCounter from './colorcounter.js'
import { Button } from 'reactstrap';


class BoxAdder extends Component {
  constructor(props){
    super(props)
    this.state = {
      boxArray :[<ColorCounter/>,<ColorCounter/>,<ColorCounter/>]
    }
  }

  addBox(){
    let {boxArray} = this.state
    if (boxArray.length < 5){
    boxArray.push(<ColorCounter/>)}
    this.setState({boxArray: boxArray})
  }

  removeBox(){
    let {boxArray} = this.state
    if (boxArray.length > 1){
    boxArray.pop()}
    this.setState({boxArray: boxArray})
  }

  render(){


    return (
      <div>
      <div className="counterApp">
      {this.state.boxArray}
      </div>
      <div className="btnToolbar Buttons" id="Buts">
      <Button color="primary" onClick={this.addBox.bind(this)}>+</Button>{' '}
      <Button color="danger"  onClick={this.removeBox.bind(this)}>-</Button>{' '}
      </div>
      </div>
      )
    }

}
export default BoxAdder
