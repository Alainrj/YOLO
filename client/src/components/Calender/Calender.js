import React from "react";
import "./Calender.css";

function Calender() {
    return (
        <div class="container" id="dailyCalender">
            <h2 id="clientPageTitle">Daily Calories Calender</h2>
            <div class="row" id="calenderContainer">
                <div class="col-md-1" id="sun">Sun</div>
                <div class="col-md-1" id="sun">Mon</div>
                <div class="col-md-1" id="sun">Tue</div>
                <div class="col-md-1" id="sun">Wed</div>
                <div class="col-md-1" id="sun">Thurs</div>
                <div class="col-md-1" id="sun">Fri</div>
                <div class="col-md-1" id="sun">Sat</div>
            </div>
            <div class="row" id="calenderContainer">
                <div class="col-md-5" id="containerBorder">
                    <div class="input-group mb-3" id="searchSection">
                        <input type="text" class="form-control" placeholder="Calories Search by Food" aria-label="Calories Search by Food" aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                    <div class="input-group mb-3" id="searchSection">
                        <input type="text" class="form-control" placeholder="Calories Search by Restaurant Menu" aria-label="Calories Search by Restaurant Menu" aria-describedby="button-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-7" id="containerBorder">
                    <div id="calenderContent">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    Breakfast : 
                                </div>
                                <div class="col-md-4">
                                    Lunch :
                                </div>
                                <div class="col-md-4">
                                    Dinner : 
                                </div>
                            </div>
                        </div>
                    </div>
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