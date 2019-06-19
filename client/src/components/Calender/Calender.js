import React from "react";
import "./Calender.css";

function Calender() {
    return (
        <div class="container">
            <h2>Daily Calories Calender</h2>
            <div class="row">
                <div class="col-md-1" id="sun">Sun</div>
                <div class="col-md-1" id="sun">Mon</div>
                <div class="col-md-1" id="sun">Tue</div>
                <div class="col-md-1" id="sun">Wed</div>
                <div class="col-md-1" id="sun">Thurs</div>
                <div class="col-md-1" id="sun">Fri</div>
                <div class="col-md-1" id="sun">Sat</div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Calories Search by Food" aria-label="Calories Search by Food" aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <br/>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Calories Search by Restaurant Menu" aria-label="Calories Search by Restaurant Menu" aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <span>Breakfast : </span>
                    <br/>
                    <span>Lunch : </span>
                    <br/>
                    <span>Dinner : </span>
                </div>
            </div>
            <div>
                <span>On (date), you ate (total calories)</span>
                <br/>
                <span>(Remainning Calories) to 1. maintain 2. lose your weight</span>
            </div>
        </div>
    );
  }

export default Calender;