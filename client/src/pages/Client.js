import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import DailyCaloriesCal from "../components/DailyCaloriesCal";
import Calender from "../components/Calender";
import Graph from "../components/Graph";
import LoginNav from "../components/LoginNav";
// import API from "../utils/API";

class Client extends Component {
  render() {
    return (
      <div>
        {/* <LoginNav /> */}
        <Container>
            <DailyCaloriesCal></DailyCaloriesCal>
            <Calender></Calender>
            <Graph></Graph>
        </Container>
      </div>
        
      
    );
  }
}

export default Client;
