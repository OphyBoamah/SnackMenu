import React from 'react';
import "../App.css"


function MealCard({name, img, details, price, alt}) {
    return (
        <div className="meal">
            <img src={require(`../images/${img}`).default} alt={alt} />
            <div className="facts">
                <h3 className="meal-data" >{name} <span className="snack-price">${price}</span></h3>
                <p className="details">{details}</p>
            </div>
        </div>
    );
}

export default MealCard;