import React from "react";
import "./DailyCaloriesCal.css";

function DailyCaloriesCal() {
    return (
        <div className="container" id="dailyCalculator">
            <div className="row">
                <div className="col-md-6" id="dailyCalculatorContents">
                    <h2 id="clientPageTitle">Daily Calories Calculator</h2>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="age">Age</span>
                        </div>
                        <input type="text" className="form-control" aria-label="ageInput" aria-describedby="ageInput" />
                        <div className="input-group-prepend">
                            <label className="input-group-text" for="gender">Gender</label>
                        </div>
                        <select className="custom-select" id="gender">
                            <option selected>Choose...</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Height</span>
                            </div>
                            <input type="text" aria-label="Feets" className="form-control"/>
                            <input type="text" aria-label="Inches" className="form-control"/>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Weight</span>
                            </div>
                            <input type="text" aria-label="Pounds" className="form-control" />
                        </div>
                        <div className="mx-auto" id="clientBtnDiv">
                            <button id="clientBtn" type="button" className="btn btn-info">Search</button>
                            <button id="clientBtn" type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>       
                </div>
                <div className="col-md-6" id="dailyCalculatorContents">
                    <h2 id="clientPageTitle">Suggested Daily Calories Results</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Maintain weight</th>
                                <th scope="col">Mild weight loss</th>
                                <th scope="col">Weight loss</th>
                                <th scope="col">Extreme weight loss</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td># calories from calories calculator</td>
                                <td># calories from calories calculator</td>
                                <td># calories from calories calculator</td>
                                <td># calories from calories calculator</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  }

export default DailyCaloriesCal;