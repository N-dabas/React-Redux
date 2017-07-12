import React, { Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { addedUser, addedPassword, userLogin, loginCheck } from '../actions/user';
import rootReducer from '../reducers/user';


const api_login_url = "https://api.edu.chat/v1/api/login/";

const mapStateToProps = (state) => {
    return {
        username: state.username,
        password: state.password,
        user: state.user,
        success:state.success,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
      onUsernameChange:(e)=>{dispatch (addedUser(e.target.value))},
      onPasswordChange:(e)=>{dispatch (addedPassword(e.target.value))},

      onLoginCheck:(url,user,pass)=>{dispatch (loginCheck(url,user,pass))}
    };
};

class Welcome extends Component{
  render(){
    return(
      <h1>Welcome {this.props.user}</h1>
    )
  }
}

class Userlogin extends Component{
  render(){
    // console.log(this.props.username);
    // console.log(this.props.password);

    if(this.props.success===false){
      return(
        <form onSubmit={(e) => {e.preventDefault(); this.props.onLoginCheck(api_login_url,this.props.username,this.props.password);}}>
          <br/>
          Username:<input type="text" name="username" placeholder="Username" value={this.props.username}   onChange={this.props.onUsernameChange}/>
          <br/>
          <br/>
          Password:<input type="password" name="password" placeholder="Password" value={this.props.password} onChange={this.props.onPasswordChange}/>
          <br/>
          <br/>
          <input
            type="submit"
          />
        </form>
    )
  } else {
      return(
        <Welcome user={this.props.user}/>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userlogin);
