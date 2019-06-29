import React from "react";
import "./style.css";
import API from '../../utils/API'

import axios from "axios";
import cheerio from 'cheerio';

class DailyCaloriesCal extends React.Component {
    constructor(props) {
        super(props);
        this.scrapeSearch = this.scrapeSearch.bind(this);
        this.state = {
            age: "",
            gender: "",
            heightFeet: "",
            heightInch: "",
            weight: "",
            results: [
                { calories: 0, percent: 0 },
                { calories: 0, percent: 0 },
                { calories: 0, percent: 0 },
                { calories: 0, percent: 0 },
            ]
        }
    }

    componentDidMount() {
        // console.log('userBefore',user)
        // axios.get("/current").then(user => {
        axios.get("/test-route").then(user => {
            console.log('user', user)
        })
    }

    handleInputChange = event => {
        console.log(event)
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value })

    }

    handleDropDownChange = event => {

        this.setState({ gender: event.target.value })
    }

    scrapeSearch = function (event) {
        event.preventDefault()

        const arrResult = []
        // We have to add this url before to avoid the CROS policy issues
        const preUrl = 'https://cors-anywhere.herokuapp.com/'

        const url = `${preUrl}https://www.calculator.net/calorie-calculator.html?ctype=standard&cage=${this.state.age}&csex=${this.state.gender}&cheightfeet=${this.state.heightFeet}&cheightinch=${this.state.heightInch}&cpound=${this.state.weight}&cactivity=1.465&cmop=0&coutunit=c&cformula=m&cfatpct=20&printit=0&x=64&y=18`

        console.log("look at this", url)

        axios.get(url)
            .then(function (response) {
                const $ = cheerio.load(response.data);
                console.log('table', $('table')[0].children)
                const tBody = $('table')[0].children[0].children
                console.log('table', tBody)

                tBody.forEach(tr => {

                    const calResult = tr.children[1].children[0].children[0].children[0].data
                    const percentResult = tr.children[1].children[0].children[2].children[0].data
                    let newObject = {
                        calories: calResult,
                        percent: percentResult
                    }


                    arrResult.push(newObject)
                    console.log('calResult', calResult)
                    console.log('percentResult', percentResult)
                })

                console.log('arrResult', arrResult)
            }).then(() => {
                this.setState(
                    {
                        results: arrResult
                    }
                )
                console.log('stateB', this.state)
            })
    }

    render() {
        console.log('state', this.state)
        return (
            <div className="container" id="dailyCalculator">
                <div id="dailyMainTitle">
                    <h2 id="myPageTitle">
                        My Page
                    </h2>
                    <h5 id="myPageSubTitle">
                        You can check your daily calories.
                    </h5>
                </div>
                <div className="row">
                    <div className="col-md-6" id="dailyCalculatorContents">
                        <div id="dailyCalculatorContents1">
                            <h2 id="dailyContentTitle">Daily Calories</h2>
                            <h5 id="dailyContentSubtitle">Calculator</h5>
                            <div id="dailyInputContainer">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="age">Age</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="ageInput" aria-describedby="ageInput" name="age" value={this.state.age} placeholder="age" onChange={this.handleInputChange} />
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="gender">Gender</label>
                                    </div>
                                    <select className="custom-select" id="gender" onChange={this.handleDropDownChange}  >
                                        <option defaultValue >Choose...</option>
                                        <option value="m"  >Male</option>
                                        <option value="f"  >Female</option>
                                    </select>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Height</span>
                                    </div>
                                    <input type="text" aria-label="Feets" className="form-control" name="heightFeet" value={this.state.heightFeet} placeholder="ft" onChange={this.handleInputChange} />
                                    <input type="text" aria-label="Inches" className="form-control" name="heightInch" value={this.state.heightInch} placeholder="inch" onChange={this.handleInputChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Weight</span>
                                    </div>
                                    <input type="text" aria-label="Pounds" className="form-control" name="weight" value={this.state.weight} placeholder="lbs" onChange={this.handleInputChange} />
                                </div>
                                <div className="mx-auto text-center">
                                    <button id="clientBtn" type="button" className="btn btn-info" onClick={this.scrapeSearch} >Search</button>
                                    <button id="clientBtn" type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                            <div>
                                <p className="text-center">Input info to search by location to find the restaurant menu items you can eat!
                                <br></br><br></br>
                                    
                                    <button type="button" className="btn-info btn-block text-center" onClick={() => window.location = "/bycaloriessearch"} >let's Go </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id="dailyCalculatorContents">
                        <div id="dailyCalculatorContents2">
                            <h2 id="dailyContentTitle">Suggested</h2>
                            <h5 id="dailyContentSubtitle">Daily Calories Results</h5>
                            <div id="dailyInputContainer">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="text-center" scope="col">Maintain weight</th>
                                            <th className="text-center" scope="col">Mild weight loss</th>
                                            <th className="text-center" scope="col">Weight loss</th>
                                            <th className="text-center" scope="col">Extreme weight loss</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-center'>
                                                <br></br>
                                                <span>{this.state.results[0].calories}</span>
                                                <br></br>
                                                <small className='text-secondary'>Calories/day</small>
                                                <br></br>
                                                <br></br>
                                                <span>{this.state.results[0].percent}</span>
                                            </td>
                                            <td className='text-center'>
                                                <br></br>
                                                <span>{this.state.results[1].calories}</span>
                                                <br></br>
                                                <small className='text-secondary'>Calories/day</small>
                                                <br></br>
                                                <br></br>
                                                <span>{this.state.results[1].percent}</span>
                                            </td>
                                            <td className='text-center'>
                                                <br></br>
                                                <span>{this.state.results[2].calories}</span>
                                                <br></br>
                                                <small className='text-secondary'>Calories/day</small>
                                                <br></br>
                                                <br></br>
                                                <span>{this.state.results[2].percent}</span>
                                            </td>
                                            <td className='text-center'>
                                                <br></br>
                                                <span>{this.state.results[3].calories}</span>
                                                <br></br>
                                                <small className='text-secondary'>Calories/day</small>
                                                <br></br>
                                                <br></br>
                                                <span>{this.state.results[3].percent}</span>
                                                <br></br>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DailyCaloriesCal;