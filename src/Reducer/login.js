const initState = {
  username: "hruday@gmail.com",
  password: "hruday123",
  isLoggedIn: false,
  message: ""
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      let checkLogin = state;
      checkLogin.isLoggedIn = true;
      checkLogin.message = "success";
      return checkLogin;
    case "LOGOUT":
      let checkLogout = state;
      checkLogout.isLoggedIn = false;
      checkLogout.message = "";
      return checkLogout;
    case "ERROR":
      let checkError = state;
      checkError.isLoggedIn = false;
      checkError.message = "Incorrect Username or Password!";
      return checkError;
    default:
      return state;
  }
};

export default loginReducer;
