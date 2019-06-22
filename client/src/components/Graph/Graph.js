import React from "react";
import "./Graph.css";

function Graph() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2>Daily Calories Graph</h2>
                    <div id="dailyGraph">
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Graph;