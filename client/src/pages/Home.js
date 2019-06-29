import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Footer from "../components/Footer";
// import DailyCaloriesCal from "../components/DailyCaloriesCal";
// import Calender from "../components/Calender";
// import Graph from "../components/Graph";
// import API from "../utils/API";
import MainPageSearch from '../components/MainPageSearch'
import Nav from '../components/Nav'

class Home extends Component {

  render() {
    return (
     <>
     <Nav></Nav>
      <Container>
        <MainPageSearch></MainPageSearch>
      </Container>
     </> 
    );
  }
}

export default Home;
