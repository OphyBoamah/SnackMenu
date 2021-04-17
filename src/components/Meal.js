import React from 'react';
import "../App.css"

function Meal({name, img, details, price}) {
    return (
        <div className="meal">
            <img src={require(`../images/${img}`).default} alt="Buttermilk-pancake" />
            <div className="facts">
                <h3 className="meal-data" >{name} <span className="snack-price">${price}</span></h3>
                <p className="details">{details}</p>
            </div>
        </div>
    );
}

export default Meal;