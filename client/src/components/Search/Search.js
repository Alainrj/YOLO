import React from "react";
import "./Search.css";

const Search = props => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h2> Food Calories Search </h2>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Name of Food" aria-label="Name of Food" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">SEARCH</button>
                    </div>
                </div>
            </div>
            <div classNameName="col">
                <h2> Restaurant Menu Calories Search </h2>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Name of the Menu" aria-label="Name of the Menu" aria-describedby="basic-addon2"></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Search;