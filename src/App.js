import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Our Menu</h1>
          <div className="category-buttons">
              <button className="btn">All</button>
              <button className="btn">Breakfast</button>
              <button className="btn">Lunch</button>
              <button className="btn">Shakes</button>
              <button className="btn">Dinner</button>
          </div>
          <div className="meals">
              <img src={require('./images/waffles.jpeg').default} alt="Buttermilk-pancake" />
              <h3>Buttermilk Pancake <span className="snack-price">$15.99</span></h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet
                  consequuntur debitis doloremque expedita facilis mollitia non praesentium soluta, temporibus.</p>

          </div>
      </header>
    </div>
  );
}

export default App;
