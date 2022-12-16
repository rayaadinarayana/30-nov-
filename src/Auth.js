import React from "react";
import firebase from "./Firebaseconfig"
class Auth extends React.Component{
	state={
		mobile:"+91"
	}
	change=(e)=>{
		this.setState({
			mobile:e.target.value
		})
	}
	handle=()=>{
		alert()
		var recaptcha=new firebase.auth.RecaptchaVerifier("recaptcha")
		let number=this.state.mobile;
		firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
			let code=prompt("enter the otp");
		if(code==null)return;
		e.confirm(code).then(function(result){
			alert("entered otp is true and your are a correct user");
			document.getElementById("recaptcha").innerHTML=""
		}).catch((error)=>{
			alert("your entered wrong otp.so please check for new otp");
			document.getElementById("recaptcha").innerHTML=""
		  })
		})
		
	}

	render(){
		return(
			<center><div className="body">
			<p>hello</p>
			<input type ="text"
			onChange={this.change} value={this.state.mobile}/>
			<div id="recaptcha"></div>
			<button onClick={this.handle}>submit</button>
			 </div></center>
		)
	}
}
export default Auth;