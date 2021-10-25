import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { DateFormatter } from "../utils/DateFormatter";
import PageNotFound from "./PageNotFound";
import Avatar from "./Avatar";

class AnsweredQuestion extends Component {
  render() {
    const { question, author, authUser } = this.props;

    if (question === null) {
      return <PageNotFound />;
    }

    const { optionOne, optionTwo, timestamp } = question;
    const { name, avatarURL } = author;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const optionOnePercent = Math.round(
      (optionOne.votes.length / totalVotes) * 100
    );
    const optionTwoPercent = Math.round(
      (optionTwo.votes.length / totalVotes) * 100
    );

    return (
      <Row className="justify-content-center">
        <Col md={6}>
          <Card bg="light" className="m-3">
            <Card.Header>
              <Avatar avatarURL={avatarURL} />
              {name} asked:
            </Card.Header>

            <Card.Body className="d-flex justify-content-center">
              <ul>
                <li>
                  {optionOne.text}
                  {optionOne.votes.includes(authUser) ? (
                    <span className="text-danger ml-2">--- Your choice</span>
                  ) : null}
                </li>
                <ProgressBar
                  now={optionOnePercent}
                  label={`${optionOnePercent}%`}
                  variant="info"
                />
                <Card.Text className="text-muted">
                  got {optionOne.votes.length} vote out of {totalVotes} votes
                </Card.Text>
                <li>
                  {optionTwo.text}
                  {optionTwo.votes.includes(authUser) ? (
                    <span className="text-danger ml-2">--- Your choice</span>
                  ) : null}
                </li>
                <ProgressBar
                  now={optionTwoPercent}
                  label={`${optionTwoPercent}%`}
                  variant="info"
                />
                <Card.Text className="text-muted">
                  got {optionTwo.votes.length} votes out of {totalVotes} vote
                </Card.Text>
              </ul>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{DateFormatter(timestamp)}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ questions, users, authUser }, { id }) {
  const question = questions[id];

  return {
    question: question ? question : null,
    author: question ? users[question.author] : null,
    authUser,
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
