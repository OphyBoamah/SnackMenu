import './App.css';
import Meal from "./components/Meal";

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

      </header>
        <div className="meals">
            <Meal/>
        </div>
    </div>
  );
}

export default App;
