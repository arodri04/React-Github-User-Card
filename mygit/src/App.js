import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      user: [],
      followerinfo: []
    }
  }
  componentDidMount(){
    fetch(`https://api.github.com/users/arodri04`)
    .then(res=> {return res.json()})
    .then(res => {this.setState({user: res})})
    
    
    fetch(`https://api.github.com/users/arodri04/followers`)
    .then(res => {return res.json()})
    .then(res => this.setState({followerinfo: res}))
  }



  render(){
    
    return (
      <div>
        {this.state.user.login}
        {console.log(this.state.user)}
        {this.state.followerinfo.map(person => {return <div>{person.login}</div>})}
      </div>
    )
  }
  
}

export default App;
