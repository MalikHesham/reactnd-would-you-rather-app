import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { resetAuthedUser } from "../actions/authedUser";
import Avatar from "./Avatar";

function NavigationBar(props) {
  const { user, dispatch } = props;

  const handleLogout = () => {
    dispatch(resetAuthedUser());
  };

  return (
    <Fragment>
      <Navbar expand="lg" bg="dark" variant="dark" className="border">
        <Navbar.Brand as={Link} to="/">
          <h6 className="m-2"> Would You Rather?</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/add">
              New Question
            </Nav.Link>
            <Nav.Link as={NavLink} to="/leaderboard">
              Leaderboard
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Navbar.Text>{user.name}</Navbar.Text>
            <Avatar avatarURL={user.avatarURL} className="ms-3" />
            <Button
              variant="outline-light"
              onClick={handleLogout}
              className="m-1"
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

function mapStateToProps({ users, authedUser }) {
  return {
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(NavigationBar);
