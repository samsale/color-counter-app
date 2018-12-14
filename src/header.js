import React, { Component } from 'react';
import {Alert} from 'reactstrap';

class Header extends Component {
  constructor(props){
    super(props)
  }


  revealDiv(){
      var x = document.getElementById('Buts');
          x.style.display = "block";
      }


  render() {


    return (
      <div className='Header' onClick={this.revealDiv.bind(this)}>
        <Alert color="light">
          <h1>Color Box Challenge</h1>
          </Alert>
      </div>
    )
  }
}

export default Header;
