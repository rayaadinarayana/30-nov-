import React from "react"
class StateExample extends React.Component{
    state={
        name:"react",
        age:2346
    }
    render(){
        return(
            <div>StateExample
                <p>{this.state.name} {this.state.age}</p>
                <img src="https://i.pinimg.com/474x/9e/2d/35/9e2d35f9d1cc9c75c5616ecbde232eed.jpg" alt="img1"/>
            </div>
        )
    }
}
export default StateExample