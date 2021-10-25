import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Login from "./components/Login";
import MainApp from "./components/MainApp";
import { handleInitialData } from "./actions/common";
// import LoadingSwal from "./components/LoadingSwal";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, loadingBar } = this.props;

    if (loadingBar.default === undefined || loadingBar.default === 1) {
      return <h4 className="text-center m-2">Loading ...</h4>;
    } else {
      return <Fragment>{!authedUser ? <Login /> : <MainApp />}</Fragment>;
    }
  }
}

function mapStateToProps({ authedUser, loadingBar }) {
  return {
    authedUser,
    loadingBar,
  };
}

export default connect(mapStateToProps)(App);
