import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { History, Table, Results } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Table />
          </Route>
          <Route path="/results" exact>
            <Results />
          </Route>
          <Route path="/history" exact>
            <History />
          </Route>
          <Route path="*">
            <Table />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
