// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'
import './style.css';
import googleInfo from "../../utils/google"
import Restaurants from '../Restaurants'
import MultiSelect from '../MultiSelect'
import SearchButton from '../SearchButton'
import InputCalories from '../InputCalories'
import FoodItemModal from '../FoodItemModal'
import Map from '../Map'
import API from '../../utils/API'
import axios from 'axios'


class ByCaloriesSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.handleOnChangeCalories = this.handleOnChangeCalories.bind(this);
    this.locationClick = this.locationClick.bind(this);
    this.locationChange = this.locationChange.bind(this);
    this.locationSearchClick = this.locationSearchClick.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.locationSearchClick = this.locationSearchClick.bind(this);
    this.itemDetailsClick = this.itemDetailsClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.state = {
      modalShow: false,
      restaurants: [],
      foodInfo:{},
      querySearch: "",
      calories: 0,
      location: '',
      currentLocation: '',
      locationUrl: `https://www.google.com/maps/embed/v1/place?q=NY&key=${googleInfo.key}`,
      myPlace: [{
        lat: 40.7127753,
        lng: -74.0059728,
        name: 'New York',
        zoom: 12,
      }]
    };
  }

  componentDidMount() {
    this.setState({
      restaurants: [],
      querySearch: '',
      calories: 0,
    })

  }

  handleSearchClick(e) {
    e.preventDefault();
    const that = this;
    console.log('restaurantObject', this.state)
    API.getRestaurants(this.state.myPlace[0].lat, this.state.myPlace[0].lng).then(arr => {

      console.log("array", arr)
      var brandIdList = arr.data.locations.map(location => location.brand_id)
      var restaurantList = arr.data.locations.map(location => {
        return (
          {
            brand_id: location.brand_id,
            lat: location.lat,
            lng: location.lng,
          })
      })

      console.log("Object", brandIdList)
      console.log("restaurantList", restaurantList)

      API.getRestaurantsByBrandId(brandIdList, this.state.querySearch).then(result => {
        console.log("Result", result)
        // Filter array by calories entered by the user
        const newArray = result.data.branded.filter(item => ((item.nf_calories >= this.state.calories - 200) && (item.nf_calories <= this.state.calories)))

        // //////////////////////////////////// //////////////////////////////////// //////////////////////////////////
        // filter the array to bring brand_id distinct
        let byRestaurantArray = [...new Set(newArray.map(x => x.nix_brand_id))]
        let arrObj = []

        // Goes through the array previously filtered and find it on the array previously filtered by calories
        for (let i = 0; i < byRestaurantArray.length; i++) {
          const item = byRestaurantArray[i];
          const newObj = {
            restaurant: {
              restuarantId: item,
              restaurantName: '',
              retaurantLat: '',
              retaurantLng: '',
              dishs: []
            }
          }
          newArray.forEach(element => {
            if (item === element.nix_brand_id) {

              const dishObj = {
                food_id: element.nix_item_id,
                food_name: element.food_name,
                calories: element.nf_calories
              }
              newObj.restaurant.restaurantName = element.brand_name
              newObj.restaurant.dishs.push(dishObj)
            }
          })
          arrObj.push(newObj);
        }
        // })

        console.log('arrObj', arrObj)

        console.log('byRestaurantArray', byRestaurantArray)



        console.log('New Array', newArray)

        // //////////////////////////////////// //////////////////////////////////// //////////////////////////////////

        that.setState({
          restaurants: arrObj
        })
        // this.setState({
        //   restaurants: newArray
        // })
        console.log("ResultFinal", this.state.restaurants)
      })
    })
  }

  onChangeSelect(result) {
    this.setState({
      querySearch: result.map(item => item.value).toString(),
    });
  }

  handleOnChangeCalories(event) {
    console.log('HandleOnchange', event.target.value)
    this.setState({
      calories: event.target.value
    })
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }

  }

  showPosition(position) {
    this.setState({
      currentLocation: `${position.coords.latitude},${position.coords.longitude}`,
      myPlace: [{
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        zoom: 14,
      }]
    })
  }

  locationClick(e) {
    e.preventDefault();
    this.setState({
      currentLocation: '',
      myPlace: [{
        lat: '',
        lng: '',
        zoom: 4,
      }]
    })
    this.getLocation();
  }

  // onChange event of location input
  locationChange(result) {
    console.log('locationChange', result.target.value)
    this.setState({
      location: result.target.value
    })
  }

  // Click event of the search buttton
  locationSearchClick(e) {
    e.preventDefault();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.location !== "" ? this.state.location : "NY"}&key=${googleInfo.key}`
    this.setState({
      locationUrl: url,
    })
    console.log("url", url)
    axios.get(url).then(result => {
      this.setState({
        myPlace: [{
          lat: result.data.results[0].geometry.location.lat,
          lng: result.data.results[0].geometry.location.lng,
          name: result.data.results[0].formatted_address,
          zoom: this.state.location === '' ? 12 : 14,
        }]
      })
    })
  }

  itemDetailsClick(event) {
    event.preventDefault();
    const itemId = event.target.getAttribute("data-itemId")
    console.log('Element', itemId)

    API.getFoodItemByItemId(itemId.toString()).then(result => {
      console.log("Result", result)

      this.setState({ 
        foodInfo : result.data.foods[0],
        modalShow: true 
      })
    })
  }

  modalClose = () => this.setState({ modalShow: false });

  render() {
    return (
      <div className="MainSearch">
        <header className="MainSearch-header">
          <div>
            <div className="input-group mb-3">
              <input id="txtSearch" type="text" className="form-control" placeholder="Search by zip code, City or address" onChange={this.locationChange} required />
              <div className="input-group-append">
                <button className="btn-ouline-light btn-sm btnLocation mainSearchButton" type="submit" onClick={this.locationClick}><img className="imgArrow" srcSet='././img/locationarrow.png' alt=""></img></button>
                <button className="btn btn-primary" type="submit" id="insert" onClick={this.locationSearchClick}>Search</button>
              </div>
            </div>
            <div style={{ height: '450px', width: '600px' }}>
              {this.state.myPlace.map(place => <Map lat={place.lat} lng={place.lng} name={place.name} zoom={place.zoom}></Map>)}
            </div>
            <br></br>
            <div className='row'>
              <div className='col-6'>
                <MultiSelect onChange={this.onChangeSelect}></MultiSelect>
              </div>
              <div className='col-4'>
                <InputCalories onChange={this.handleOnChangeCalories}></InputCalories>
              </div>
              <div className='col-2'>
                <SearchButton onClick={this.handleSearchClick}></SearchButton>
              </div>
            </div>
            <br></br>
            {this.state.restaurants.map(restaurant => <Restaurants onClick={this.itemDetailsClick} restaurantInfo={restaurant} />)}
          </div>
          </header>
        {/* Modal window whit food information */}
        <FoodItemModal
          foodInfo={this.state.foodInfo}
          show={this.state.modalShow}
          onHide={this.modalClose}
        />
      </div>
    );
  }
}

export default ByCaloriesSearch;
