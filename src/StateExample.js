import React from "react"
class StateExample extends React.Component{
    state={
        name:"react",
        age:2346,
        name:"nodejs"

    }
    render(){
        return(
            <div>StateExample
                <p>{this.state.name} {this.state.age}</p>
            </div>
        )
    }
}
export default StateExample