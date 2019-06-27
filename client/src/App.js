import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mypage" component={Client} />
          <Route exact path="/mypage/:id" component={Client} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
