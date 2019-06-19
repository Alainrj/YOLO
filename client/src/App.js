import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Client from "./pages/Client";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clients" component={Client} />
          <Route exact path="/clients/:id" component={Client} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
