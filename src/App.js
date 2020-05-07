import React, { useState } from "react";
import { login, error, logout } from "./Action";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const App = () => {
  const [uemail, Setuemail] = useState("");
  const [upassword, Setupassword] = useState("");
  const [eError, SeteError] = useState("");
  const [pError, SetpError] = useState("");

  const userState = useSelector(state => state.login.username);
  const passState = useSelector(state => state.login.password);
  const isLogged = useSelector(state => state.login.isLoggedIn);
  const isMessage = useSelector(state => state.login.message);
  const dispatch = useDispatch();

  const onSubmitHandler = e => {
    e.preventDefault();
    const showValidation = validation();
    if (showValidation) {
      if (uemail === userState && upassword === passState) {
        localStorage.setItem("token", "anyRandomString");
        dispatch(login());
      } else {
        dispatch(error());
      }
    }
  };
  const validation = () => {
    if (uemail === "") {
      SeteError("Please enter Email!");
    }

    if (upassword === "") {
      SetpError("Please enter Password!");
    }

    if (uemail === "" || upassword === "") {
      return false;
    } else {
      return true;
    }
  };

  const onChangeHandlermail = e => {
    Setuemail(e.target.value);
    SeteError("");
    SetpError("");
    dispatch(logout());
  };
  const onChangeHandlerpass = e => {
    Setupassword(e.target.value);
    SeteError("");
    SetpError("");
    dispatch(logout());
  };

  if (isLogged) {
    return <Redirect to="/admin" />;
  }
  return (
    <div>
      <div
        style={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 350 }}>
            <Header as="h3" color="teal" textAlign="center">
              Login
            </Header>
            <Form size="large" onSubmit={onSubmitHandler}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  name="uemail"
                  placeholder="E-mail"
                  type="email"
                  value={uemail}
                  onChange={onChangeHandlermail}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  name="upassword"
                  placeholder="Password"
                  type="password"
                  value={upassword}
                  onChange={onChangeHandlerpass}
                />
                <Button color="teal" fluid size="large" type="submit">
                  login
                </Button>
                {isMessage !== "" ? (
                  <div
                    style={{ color: "red", margin: "10px", fontSize: "1.5rem" }}
                  >
                    {isMessage}
                  </div>
                ) : null}
                {eError !== "" && pError !== "" ? (
                  <div
                    style={{ color: "red", margin: "10px", fontSize: "1.5rem" }}
                  >
                    {eError}
                  </div>
                ) : (
                  <div
                    style={{ color: "red", margin: "5px", fontSize: "1.5rem" }}
                  >
                    {eError}
                    {pError}
                  </div>
                )}
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default App;
