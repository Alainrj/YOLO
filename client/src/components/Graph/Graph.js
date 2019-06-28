import React from "react";
import "./Graph.css";
import LineGraph from "./LineGraph";


function Graph() {

    return (
        <div className="container">
            <div id="graphContainer">
                <div className="row">
                    <div className="col-md-12">
                        <div id="graphBigTitle">
                            <h2 id="graphTitle">Graph</h2>
                            <h5 id="graphSubtitle">Daily Calories</h5>
                        </div>
                        <div id="dailyGraph">
                            <LineGraph />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graph;