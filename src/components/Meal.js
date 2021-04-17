import React from 'react';
import "../App.css"

function Meal(props) {
    return (
        <div className="meal">
            <img src={require('../images/waffles.jpeg').default} alt="Buttermilk-pancake" />
            <div className="facts">
                <h3 className="meal-data" >Buttermilk Pancake <span className="snack-price">$15.99</span></h3>
                <p className="details">Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet
                    consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus.</p>
            </div>

        </div>
    );
}

export default Meal;