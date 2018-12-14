import React, { Component } from 'react';
import ColorCounter from './colorcounter.js'
import { Button } from 'reactstrap';


class BoxAdder extends Component {
  constructor(props){
    super(props)
    this.state = {
      boxArray :[<ColorCounter/>]
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
      
      <div className="btnToolbar Buttons">
      <Button color="primary" size="sm" onClick={this.addBox.bind(this)}>Add</Button>{' '}
      <Button color="danger" size="sm" onClick={this.removeBox.bind(this)}>Remove</Button>{' '}
      </div>
      </div>



      )
    }

}
export default BoxAdder
