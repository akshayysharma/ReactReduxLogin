import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AllReducer from "./Reducer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dash from "./Component/dashboard";
import Logout from "./Component/logout";
import "semantic-ui-css/semantic.min.css";

const myStore = createStore(
  AllReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" exact component={Dash} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/" exact component={App} />
        <Route render={() => <h3>Page not found</h3>} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
