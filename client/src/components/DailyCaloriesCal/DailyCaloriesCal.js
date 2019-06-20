import React from "react";
import "./DailyCaloriesCal.css";

function DailyCaloriesCal() {
    return (
        <div class="container" id="dailyCalculator">
            <div class="row">
                <div class="col-md-6" id="dailyCalculatorContents">
                    <h2 id="clientPageTitle">Daily Calories Calculator</h2>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="age">Age</span>
                        </div>
                        <input type="text" class="form-control" aria-label="ageInput" aria-describedby="ageInput" />
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="gender">Gender</label>
                        </div>
                        <select class="custom-select" id="gender">
                            <option selected>Choose...</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Height</span>
                            </div>
                            <input type="text" aria-label="Feets" class="form-control"/>
                            <input type="text" aria-label="Inches" class="form-control"/>
                        </div>
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">Weight</span>
                            </div>
                            <input type="text" aria-label="Pounds" class="form-control" />
                        </div>
                        <div class="mx-auto" id="clientBtnDiv">
                            <button id="clientBtn" type="button" class="btn btn-info">Search</button>
                            <button id="clientBtn" type="button" class="btn btn-primary">Save</button>
                        </div>
                    </div>       
                </div>
                <div class="col-md-6" id="dailyCalculatorContents">
                    <h2 id="clientPageTitle">Suggested Daily Calories Results</h2>
                    <table class="table">
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