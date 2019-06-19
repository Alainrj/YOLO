import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Footer from "../components/Footer";
import DailyCaloriesCal from "../components/DailyCaloriesCal";
import Calender from "../components/Calender";
import Graph from "../components/Graph";
// import API from "../utils/API";

class Client extends Component {
//   state = {
//     book: {}
//   };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }
  render() {
    return (
        <Container>
            <DailyCaloriesCal></DailyCaloriesCal>
            <Calender></Calender>
            <Graph></Graph>
        </Container>
      
    );
  }
}

export default Client;