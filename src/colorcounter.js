import React, { Component } from 'react';

class ColorCounter extends Component {
  constructor(props){
    super(props)
    this.state = {
    counter: 0,
    colors: [       {word:'Yellow',code:'#f7e51b',font:'#000000'},
                    {word:'Blue',code:'#1260ce', font:'#FFFFFF'},
                    {word:'Orange',code:'#db6606', font:'#000000'},
                    {word:"Bianchi Blue",code:'#1df7f0', font:'#000000'},
                    {word:'Red',code:'#ba1024', font:'#000000'},
                    {word:'Black',code:'#000000', font:'#FFFFFF'}]
                  }
                }

    updateCounter(){
      let {counter, colors} = this.state
      if(counter < colors.length - 1){
         counter += 1
      }else if (counter = colors.length){
         counter = 0
      }
      this.setState({counter: counter})
    }

  render() {
    let {counter, colors} = this.state
    let styles = {
      margin: '30px',
      width: '200px',
      height: '200px',
      backgroundColor: colors[counter].code,
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '175px',
      userSelect: 'none',
      display: 'flex',
      borderRadius: '15px',
      fontSize: '20px',
      color: colors[counter].font,
      }


    return (
      <div style={styles} onClick={this.updateCounter.bind(this)} >
      {colors[counter].word}
      </div>
    )
  }
}


export default ColorCounter;
