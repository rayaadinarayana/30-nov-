
import React, { Component } from 'react'

export default class Events extends Component {
    state={
        username:""
        
    }
    handleClick=()=>{
        console.log(this.state.username)
        this.setState({
            username:""
        })
    }
    handleUser=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.handleUser} />
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}
