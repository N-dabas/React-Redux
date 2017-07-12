export default function reducer(state={
    username:"",
    password:"",
    success:false,
    user:"",
}, action) {
  switch (action.type) {
    case "USERNAME_ENTERED": {
      return {...state,username:action.username}
    }
    case "PASSWORD_ENTERED": {
      return {...state,password:action.password}
    }
    case "USER_LOGGED_IN":{
      return {...state,success:action.success,user:action.user}
    }
  }
  return state;
}
