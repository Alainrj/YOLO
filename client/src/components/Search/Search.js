import React from "react";
import "./Search.css";

const Search = props => (
    <div className="container">
        <div className="row">
            <div className="col">
                <h2> Food Calories Search </h2>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Name of Food" aria-label="Name of Food" aria-describedby="basic-addon2"></input>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">SEARCH</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <h2> Restaurant Menu Calories Search </h2>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Name of the Menu" aria-label="Name of the Menu" aria-describedby="basic-addon2"></input>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Search;