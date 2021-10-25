import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { DateFormatter } from "../utils/DateFormatter";
import Avatar from "./Avatar";

class BriefQuestion extends Component {
  render() {
    const { question, author } = this.props;
    const { optionOne, timestamp, id } = question;
    const { name, avatarURL } = author;

    return (
      <Row className="justify-content-center">
        <Col md={6}>
          <Card bg="light" className="m-3">
            <Card.Header>
              <Avatar avatarURL={avatarURL} className="mr-2" />
              {name} asked:
            </Card.Header>
            <Card.Body className="text-center">
              <Card.Text>{optionOne.text.slice(0, 50)}...?</Card.Text>
              <Link to={`/questions/${id}`}>
                <Button variant="primary">View Question</Button>
              </Link>
            </Card.Body>
            <Card.Footer>
              <h6 className="text-muted">{DateFormatter(timestamp)}</h6>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
  };
}

export default connect(mapStateToProps)(BriefQuestion);
