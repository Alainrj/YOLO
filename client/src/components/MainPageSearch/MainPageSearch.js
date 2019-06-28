import React from "react";
import "./MainPageSearch.css";
import API from '../../utils/API'


class MainPageSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchByFoodClick = this.handleSearchByFoodClick.bind(this);
        this.handleOnChangeFood = this.handleOnChangeFood.bind(this);
        this.state = {
            query: "",
        }
    }

    handleOnChangeFood(event) {
        console.log('HandleOnchange', event.target.value)
        this.setState({
            query: event.target.value
        })
    }

    handleSearchByFoodClick(e) {
        e.preventDefault();
        console.log('restaurantObject', this.state)


        API.getFoodByQuery(this.state.query).then(arr => {

            console.log("array", arr)
        })
    }

    render() {
        return (
            <div>
                <div id="banner">
                    <div id="appTitleContainer">
                        <h2 id="appTitle">
                            You Only Live Once
                        </h2>
                        <h5 id="appSubtitle">
                            So, we are here to make your life better
                        </h5>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" id="mainPageOutline" >
                            <div className="col-md-12" id="mainPageArea1">
                                <h2 id="mainPageTitle">How </h2>
                                <h5 id="mainPageSubtitle">to use this app</h5>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequuntur eligendi quia et placeat explicabo beatae illo dolorem, maiores veniam perferendis hic. Dolores esse voluptatem culpa amet, ut repellat laudantium.</p>
                            </div>
                        </div>
                        <div className="col-md-4" id="mainPageOutline">
                            <div className="col-md-12" id="mainPageArea2">
                                <h2 id="mainPageTitle">Food</h2>
                                <h5 id="mainPageSubtitle">Calories Search</h5>
                                <div className="input-group mb-3">
                                    <input type="text" onChange={this.handleOnChangeFood} className="form-control" placeholder="" aria-label="Food Calories Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn onClick={this.handleSearchByFoodClick} btn-outline-secondary" type="button">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" id="mainPageOutline" >
                            <div className="col-md-12" id="mainPageArea3">
                                <h2 id="mainPageTitle">Restaurant</h2>
                                <h5 id="mainPageSubtitle">Menu Calories Search</h5>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="" aria-label="Restaurant Menu Calroies Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" type="button">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPageSearch;