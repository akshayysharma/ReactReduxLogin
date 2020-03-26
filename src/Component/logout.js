import React from "react";
import { Link, Redirect } from "react-router-dom";
import { logout } from "../Action";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";

const Logout = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(logout());
  };

  const token = localStorage.getItem("token");
  const isLogged = useSelector(state => state.login.isLoggedIn);
  if (token === "") {
    dispatch(logout());
  }

  if (isLogged === false) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1>You have been logged out!!!</h1>
        <Button color="teal" onClick={onClickHandler}>
          <Link to="/" style={{ color: "white" }}>
            Login Again
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Logout;
