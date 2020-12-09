import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { string: 'Hello Pasha'}
  }

  render(){
    return (
      <div>{this.state.string}</div>
    )
  }
}

export default App;
