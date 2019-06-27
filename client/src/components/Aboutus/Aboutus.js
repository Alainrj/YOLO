import React from "react";
import "./Aboutus.css";

function Aboutus() {
    return (
        <div className="container">
            <div className="row" id="aboutContainer">
                <div className="col-md-12">
                    <h2 id="aboutTitle">This is about our app</h2>
                    <p id="aboutPassage">The app will be a calories manager, based on how many calories the user wants to get we will suggest the food that contains the calories desired or less using the NUTRIONIX API (or any other) from a least 10 closest restaurants based on google maps API. The user should register into the app and add information on the profile as described below, the user has the option to add pictures to follow the lost weight progress, we will keep a record of all pictures from day 1 to last, based on the user profile the app will suggest a daily calories amount, for that we’ll scrape information from https://www.calculator.net/calorie-calculator.html, to store the info we can use mongoDB and firebase to upload the pictures.</p>
                </div>
            </div>
        </div>
    );
  }

export default Aboutus;