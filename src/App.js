import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Results } from "./pages/results";
import { Table } from "./pages/table";

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
          <Route path="*">
            <Table />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
