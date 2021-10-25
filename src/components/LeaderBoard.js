import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import UserStats from "./UserStats";

class LeaderBoard extends Component {
  render() {
    return (
      <Fragment>
        <h6 className="text-center m-1">LeaderBoard</h6>
        {this.props.userIDs.map((id) => (
          <UserStats key={id} id={id} />
        ))}
      </Fragment>
    );
  }
}

function mapStateToProps({ users }) {
  const sortedUserIDs = Object.keys(users).sort((idA, idB) => {
    const scoreA =
      Object.keys(users[idA].answers).length + users[idA].questions.length;
    const scoreB =
      Object.keys(users[idB].answers).length + users[idB].questions.length;

    return scoreB - scoreA;
  });

  return {
    userIDs: sortedUserIDs,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
