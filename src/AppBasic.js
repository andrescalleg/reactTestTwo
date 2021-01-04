import { render } from '@testing-library/react';
import React from 'react'
import './App.css';


function HelloWorld(props) {
  return(
    <div className = 'col'>{props.myText}</div>
  )
}

class HelloPeople extends React.Component{

state = {
  show: true
}

toggle = () =>{
  this.setState({show: true})
}

toggleOff = () =>{
  this.setState({show: false})
}

  render(){
    if(this.state.show){
      return( 
        <div>
          <div className = "col">this is a component {this.props.myText}</div>
          <button onClick = { this.toggleOff }> Toggle button</button>
        </div>
      )
    }
    else{
      return( 
        <div>
          <h1 className = "col">this is a false component {this.props.myText}</h1>
          <button onClick = {  this.toggle }> Toggle button</button>
        </div>
      )
    }
  }
}


function AppBasic() {
  return (
    <div>This is my component: 
      <HelloWorld myText = "Hello!!!" />
      <HelloPeople myText = "Andres" />
    </div>
  );
}

export default AppBasic;
