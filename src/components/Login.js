import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    errorMsg: "",
  };

  handleSubmit = (e) => {
    const userID = this.userID.value;
    const { dispatch } = this.props;

    e.preventDefault();

    if (userID !== "") {
      dispatch(setAuthedUser(userID));
    } else {
      this.setState({ errorMsg: "You must select a user first!" });
    }
  };

  render() {
    const { userNames } = this.props;
    const { errorMsg } = this.state;

    return (
      <Row className="justify-content-center align-items-center">
        <Col md={6} className="m-2">
          <Card bg="light" className="text-center">
            <Card.Header>Welcome to Would You Rather App!</Card.Header>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGridState">
                  {errorMsg ? (
                    <h6 className="text-danger">{errorMsg}</h6>
                  ) : null}

                  <Form.Control as="select" ref={(id) => (this.userID = id)}>
                    <option value="">Select a User</option>
                    {userNames.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button type="submit" variant="success" className="m-2">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userNames: Object.keys(users).map((id) => ({
      value: id,
      label: users[id].name,
    })),
  };
}

export default connect(mapStateToProps)(Login);
