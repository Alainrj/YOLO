import React from "react";
import "./Graph.css";

function Graph() {
    return (
        <div className="container" id="graphContainer">
            <div className="row">
                <div className="col-md-12">
                    <h2 id="graphTitle">Daily Calories Graph</h2>
                    <div id="dailyGraph">
                        
                    </div>
                </div>
            </div>
        </div>
    );
  }

export default Graph;