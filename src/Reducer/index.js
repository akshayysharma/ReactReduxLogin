import loginReducer from "./login";
import EmployeeReducer from "./empList";
import { combineReducers } from "redux";

const AllReducer = combineReducers({
  login: loginReducer,
  emp: EmployeeReducer
});

export default AllReducer;
