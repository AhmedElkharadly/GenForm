import logo from './logo.svg';
import GeniricForm from './Component/GeniricForm'
import './App.css';
import { formProps } from "./Component/formProps";
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {formProps}
    
  }
 render(){
  return (
    <div className="App">
      <GeniricForm formProps={this.state.formProps} />
    </div>
  )
}
}

export default App;
