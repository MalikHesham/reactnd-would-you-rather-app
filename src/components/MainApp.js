import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import LeaderBoard from "./LeaderBoard";
import PageNotFound from "./PageNotFound";

class MainApp extends Component {
  render() {
    return (
      <Router>
        <Container>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/questions/:id" component={QuestionPage} />
            <Route path="/add" component={NewQuestion} />
            <Route path="/leaderboard" component={LeaderBoard} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default MainApp;
