import React from 'react'
import Display from './Display'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { string: 'Hello Pasha'}
    this.change = this.change.bind(this)  
  }
  change(){
    this.setState({string: 'Hello World!'})
  }

  render(){
    return (
      <div>
        <Display string={this.state.string} />
        <button onClick={this.change}>Click</button>
      </div>
      
    )
  }
}

export default App;
