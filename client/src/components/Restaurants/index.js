// import React, { useState, useEffect } from 'react'
import React from "react";
import Card from 'react-bootstrap/Card'
// import axios from 'axios'

export default (props) => {

    return (
        <div>
            <Card>
                <br></br>
                <Card.Title>{props.restaurantInfo.restaurant.restaurantName}</Card.Title>
                {props.restaurantInfo.restaurant.dishs.map(item =>

                    <Card.Title>
                        <button className="btn-lg btn-block" onClick={props.onClick} data-itemId={item.food_id}>
                            {item.food_name}  -- {item.calories}
                        </button>
                    </Card.Title>

                )}
            </Card>
            <br></br>
        </div>)
}

