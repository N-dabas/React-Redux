import React, { Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { addedUser, addedPassword, userLogin, loginCheck } from '../actions/user';
import reducer from '../reducers/user';


const api_login_url = "https://api.edu.chat/v1/api/login/";
class Welcome extends Component{
  render(){
    return(
      <h1>Welcome </h1>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        user: state.user,
        success:state.success,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {onUsernameChange:(e)=>{dispatch (addedUser(e.target.value))},

            onPasswordChange:(e)=>{dispatch (addedPassword(e.target.value))},

            onLoginCheck:()=>{dispatch (loginCheck("https://api.edu.chat/v1/api/login/","aditya.patil@edu.chat","educhat"))}
    };
};

class Userlogin extends Component{

  render(){
    // console.log(this.props.username);
    // console.log(this.props.password);
    if(this.props.success===false){
      return(
        <form onSubmit={this.props.onLoginCheck}>
          <br/>Username:<input type="text" name="username" placeholder="Username"   onChange={this.props.onUsernameChange}/> <br/><br/>
          Password:<input type="password" name="password" placeholder="Password"  onChange={this.props.onPasswordChange}/> <br/><br/>
          <input type="submit" value="Login"/>
        </form>
    )
  } else {
      return(
        <Welcome/>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlogin);
