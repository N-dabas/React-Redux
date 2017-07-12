import axios from 'axios';

export function addedUser(username){
  return{
    type:"USERNAME_ENTERED",
    username:username
  };
}
export function addedPassword(password){
  return{
    type:"PASSWORD_ENTERED",
    password:password
  };
}
export function userLogin(bool,user){
  return{
    type:"USER_LOGGED_IN",
    success:bool,
    user:user

  };
}
export function loginCheck(url,username,password){
  return(dispatch)=>{
      console.log(username);
      console.log(password);
      axios.post(url, {username: username, password: password, platform: "web"})
      .then((response) =>
      (dispatch(userLogin(true,response.data.results.user.first_name))))
      .catch(error=>
      {alert("Access Denied")});
  }
}
