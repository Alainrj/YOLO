import React from "react";
import "./MainPageSearch.css";
import API from '../../utils/API'

class MainPageSearch extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearchByFoodClick = this.handleSearchByFoodClick.bind(this);
        this.handleOnChangeFood = this.handleOnChangeFood.bind(this);
        this.handleSearchByFoodClickFake = this.handleSearchByFoodClickFake.bind(this);
        this.handleOnChangeRestaurant = this.handleOnChangeRestaurant.bind(this);
        this.handleSearchByRestaurantClick = this.handleSearchByRestaurantClick.bind(this);
        this.state = {
            query: "",
            restaurantQuery: "",
            foodSearchList: [],
            restaurantSearchList: [],
            foodMessage: "",
            restaurantMessage: "",
            restaurantTitle: "",
            foodTitle: "",
        }
    }

    handleOnChangeFood(event) {
        // console.log('HandleOnchangeFood', event.target.value)
        this.setState({
            query: event.target.value
        })
    }

    handleOnChangeRestaurant(event) {
        // console.log('HandleOnchangeRestaurant', event.target.value)
        this.setState({
            restaurantQuery: event.target.value
        })
    }

    handleSearchByFoodClick(e) {
        e.preventDefault();
        console.log('restaurantObject', this.state)
        if (this.state.query != "") {
            API.getFoodByQuery(this.state.query).then(result => {
                if (result.data.branded.length > 0) {
                    const list = []

                    for (let i = 0; i < 7; i++) {
                        const element = result.data.branded[i]

                        // console.log(element);
                        const itemId = element.nix_item_id;

                        API.getFoodItemByItemId(itemId).then(res => {
                            const newObj = {
                                foodName: res.data.foods[0].food_name,
                                calories: res.data.foods[0].nf_calories,
                            }

                            console.log('newObj', newObj)
                            list.push(newObj)
                            console.log('List', list)


                            this.setState({
                                foodSearchList: list,
                                foodTitle: this.state.query,
                            })
                        })
                    }
                } else {
                    this.setState({
                        query: "",
                        foodSearchList: [],
                        foodTitle: "",
                        foodMessage: "No results"
                    })
                }
            })
        }
        else {
            this.setState({
                query: "",
                foodSearchList: [],
                foodTitle: "",
                foodMessage: "Please insert a food name",
            })
        }
    }

    handleSearchByRestaurantClick(e) {
        e.preventDefault();
        console.log('restaurantObject', this.state)

        if (this.state.restaurantQuery != "") {

            API.getFoodByQuery(this.state.restaurantQuery).then(result => {
                console.log('result', result)
                if (result.data.branded.length > 0) {
                    const list = []

                    for (let i = 0; i < result.data.branded.length; i++) {
                        const element = result.data.branded[i]

                        // if (element.brand_name.toLowerCase().trim() == this.state.restaurantQuery.toLowerCase().trim()) {
                        if (element.brand_name.toLowerCase().trim().includes(this.state.restaurantQuery.toLowerCase().trim())) {

                            const newObj = {
                                foodName: element.food_name,
                                calories: element.nf_calories,
                            }

                            // console.log('newObj', newObj)
                            list.push(newObj)
                            // console.log('List', list)


                            this.setState({
                                restaurantTitle: element.brand_name,
                                restaurantSearchList: list
                            })
                        }
                    }
                } else {
                    this.setState({
                        restaurantQuery: "",
                        restaurantSearchList: [],
                        restaurantTitle: "",
                        restaurantMessage: "No results"
                    })
                }
            })
        }
        else {
            this.setState({
                restaurantQuery: "",
                restaurantSearchList: [],
                restaurantTitle: "",
                restaurantMessage: "Please insert a restaurant name"
            })
        }
    }

    handleSearchByFoodClickFake(e) {
        e.preventDefault();
        console.log('restaurantObject', this.state)
        if (this.state.query != "") {
            const list = [
                { foodName: this.state.query + ' example', calories: 600 },
                { foodName: 'burger example', calories: 499 },
                { foodName: 'salad example', calories: 430 },
                { foodName: 'fish example', calories: 200 },
                { foodName: 'beef example', calories: 902 },
                { foodName: 'chicken example', calories: 902 },
                { foodName: 'Sandwich example', calories: 902 },
            ]

            this.setState({
                foodSearchList: list,
                foodTitle: this.state.query,
            })
        } else {
            this.setState({
                query: "",
                foodSearchList: [],
                foodTitle: "",
                foodMessage: "Please insert a food name"
            })
        }
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
                                <p>Users can lose weight by:</p>
                                <li className="listAboutDescription">Registering and taking your 1st photo.</li>
                                <li className="listAboutDescription">Set Calorie Targets for weight loss. Use Calorie Calculator.</li>
                                <li className="listAboutDescription">Log in Items ate via food or restaurant search.</li>
                                <li className="listAboutDescription"> Monitor daily or weekly progress</li>
                                <li className="listAboutDescription">Upload picture to stay motivated!</li>
                            </div>
                        </div>
                        <div className="col-md-4" id="mainPageOutline">
                            <div className="col-md-12" id="mainPageArea2">
                                <h2 id="mainPageTitle">Food</h2>
                                <h5 id="mainPageSubtitle">Calories Search</h5>
                                <div className="input-group mb-3">
                                    <input type="text" onChange={this.handleOnChangeFood} className="form-control" placeholder="" aria-label="Food Calories Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" onClick={this.handleSearchByFoodClick} type="button">Search</button>
                                        {/* <button className="btn btn-outline-secondary" onClick={this.handleSearchByFoodClickFake} type="button">Search</button> */}
                                    </div>
                                </div>
                                <div className="text-left">
                                    <h5 style={{ display: this.state.foodSearchList.length > 0 ? 'block' : 'none' }} className="text-center">{this.state.foodTitle}</h5>
                                    <ul className='ulSearchByFood navbar-nav mr-auto'>
                                        {this.state.foodSearchList.map(food => {
                                            return (
                                                <li className='listSearchByFood'>
                                                    <h6 className='float-left'>{food.foodName}</h6>
                                                    <span className='float-right'>{food.calories}<small> Calories</small></span>
                                                </li>)
                                        })}
                                        <br></br>
                                        {<label style={{ display: this.state.foodSearchList.length > 0 ? 'none' : 'block' }} className='text-danger text-center'>{this.state.foodMessage}</label>}
                                        {<button style={{ display: this.state.foodSearchList.length > 0 ? 'block' : 'none' }} className='btn-sm btn-outline-secondary btn-block' data-toggle="modal" data-target="#registerModal" >Show more</button>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4" id="mainPageOutline" >
                            <div className="col-md-12" id="mainPageArea3">
                                <h2 id="mainPageTitle">Restaurant</h2>
                                <h5 id="mainPageSubtitle">Menu Calories Search</h5>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" onChange={this.handleOnChangeRestaurant} placeholder="" aria-label="Restaurant Menu Calroies Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-secondary" onClick={this.handleSearchByRestaurantClick} type="button">Search</button>
                                    </div>
                                </div>

                                <div className="text-left">
                                    <h5 className="text-center">{this.state.restaurantTitle}</h5>
                                    <ul className='ulSearchByFood navbar-nav mr-auto'>
                                        {this.state.restaurantSearchList.slice(0, 7).map(restaurant => {
                                            return (
                                                <li className='listSearchByFood'>
                                                    <h6 className='float-left'>{restaurant.foodName}</h6>
                                                    <span className='float-right'>{restaurant.calories}<small> Calories</small></span>
                                                </li>)
                                        })}
                                        <br></br>
                                        {<label style={{ display: this.state.restaurantSearchList.length > 0 ? 'none' : 'block' }} className='text-danger text-center'>{this.state.restaurantMessage}</label>}
                                        {<button style={{ display: this.state.restaurantSearchList.length > 0 ? 'block' : 'none' }} className='btn-sm btn-outline-secondary btn-block' data-toggle="modal" data-target="#registerModal" >Show more</button>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MainPageSearch;