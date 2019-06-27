import React from "react";
import "./MainPageSearch.css";

function MainPageSearch() {
    return (
    <div>
        <div id="banner">
            <img id="bannerImg" src="https://cdn.pixabay.com/photo/2017/09/23/12/40/catering-2778755_1280.jpg"/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4" id="mainPageArea1">
                    <h2 id="mainPageTitle">How to use this app</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequuntur eligendi quia et placeat explicabo beatae illo dolorem, maiores veniam perferendis hic. Dolores esse voluptatem culpa amet, ut repellat laudantium.</p>
                    <br/>
                    <br/>
                    <h2 id="mainPageTitle">Why people need to use our app</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum neque alias illo, tenetur placeat, minus culpa dolore necessitatibus pariatur rem, temporibus quasi maiores id. Pariatur minima corporis odit repellendus iure?</p>
                </div>
                <div className="col-md-4" id="mainPageArea2">
                    <h2 id="mainPageTitle">Food</h2>
                    <h5 id="mainPageSubtitle">Calories Search</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Food Calories Search" aria-label="Food Calories Search" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4" id="mainPageArea3">
                <h2 id="mainPageTitle">Restaurant Menu</h2>
                <h5 id="mainPageSubtitle">Calories Search</h5>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Restaurant Menu Calroies Search" aria-label="Restaurant Menu Calroies Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  }

export default MainPageSearch;