import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Client from "./pages/Client";
import Search from "./pages/Search";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Nav from './components/Nav'
import './App.css'

function App() {
  return (
    <Router>
      <div >

        <Nav />
        <div className="appBody">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/mypage" component={Client} />
            <Route exact path="/mypage/:id" component={Client} />
            <Route exact path="/bycaloriessearch" component={Search} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
