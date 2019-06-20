import React from "react";
import "./MainPageSearch.css";

function MainPageSearch() {
    return (
    <div>
        <div id="banner">
            <img id="bannerImg" src="https://cdn.pixabay.com/photo/2017/09/23/12/40/catering-2778755_1280.jpg"/>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-4" id="mainPageArea">
                    <h2 id="mainPageTitle">How to use this app</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequuntur eligendi quia et placeat explicabo beatae illo dolorem, maiores veniam perferendis hic. Dolores esse voluptatem culpa amet, ut repellat laudantium.</p>
                    <br/>
                    <br/>
                    <h2 id="mainPageTitle">Why people need to use our app</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum neque alias illo, tenetur placeat, minus culpa dolore necessitatibus pariatur rem, temporibus quasi maiores id. Pariatur minima corporis odit repellendus iure?</p>
                </div>
                <div class="col-md-4" id="mainPageArea">
                    <h2 id="mainPageTitle">Food Calories Search</h2>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Food Calories Search" aria-label="Food Calories Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4" id="mainPageArea">
                <h2 id="mainPageTitle">Restaurant Menu Calroies Search</h2>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Restaurant Menu Calroies Search" aria-label="Restaurant Menu Calroies Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
  }

export default MainPageSearch;