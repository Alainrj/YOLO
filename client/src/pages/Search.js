
import React, { Component } from "react";
import ByCaloriesSearch from "../components/ByCaloriesSearch"
import {Container } from "../components/Grid";


class Search extends Component {

  render() {
    return (
        <Container>
            <ByCaloriesSearch></ByCaloriesSearch>
        </Container>
      
    );
  }
}

export default Search;
