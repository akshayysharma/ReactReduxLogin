import React from "react";
import { Link, Redirect } from "react-router-dom";
import { logout } from "../Action";
import { useSelector, useDispatch } from "react-redux";
import { Table, Menu } from "semantic-ui-react";

const Dashboard = () => {
  const data = useSelector(state => state.emp);
  const token = localStorage.getItem("token");
  const isLogged = useSelector(state => state.login.isLoggedIn);
  const dispatch = useDispatch();
  if (token === "") {
    dispatch(logout());
  }

  if (isLogged === false) {
    return <Redirect to="/" />;
  }
  let showData = [];
  return (
    <div>
      <Menu>
        <Menu.Item name="editorials" position="right">
          <Link to="/logout">Logout</Link>
        </Menu.Item>
      </Menu>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>PhoneNo</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {
          (showData = data.user.map(item => (
            <Table.Body key={item.id}>
              <Table.Row>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.age}</Table.Cell>
                <Table.Cell>{item.gender}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.phoneNo}</Table.Cell>
              </Table.Row>
            </Table.Body>
          )))
        }
      </Table>
    </div>
  );
};

export default Dashboard;
