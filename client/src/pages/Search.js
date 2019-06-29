
import React, { Component } from "react";
import ByCaloriesSearch from "../components/ByCaloriesSearch"
import { Container } from "../components/Grid";
import LoginNav from "../components/LoginNav";


class Search extends Component {

  render() {
    return (
      <div>
        <LoginNav />
        <Container>
          <ByCaloriesSearch></ByCaloriesSearch>
        </Container>
      </div>
    );
  }
}

export default Search;
