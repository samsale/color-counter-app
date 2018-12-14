import React, { Component } from 'react';
import {Alert} from 'reactstrap';

class Header extends Component {
  render() {


    return (
      <div className='Header'>
        <Alert color="light">
          <h1>Color Box Challenge</h1>
          </Alert>
      </div>
    )
  }
}

export default Header;
