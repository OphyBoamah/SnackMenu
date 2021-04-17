import './App.css';
import Meal from "./components/Meal";

//
// const buttons = [
//     {name: "All"},
//     {name: "Breakfast"},
//     {name: "Lunch"},
//     {name: "Shakes"},
//     {name: "Dinner"}
// ]

const cards = [
    {   id: 1,
        name:"Buttermilk Pancakes",
        price:"15.99",
        alt: "Buttermilk Pancakes",
        img: "waffles.jpeg",
        details:"Loremipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
        "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus" },

    {   id: 2,
        name:"Diner Doubles",
        price:"13.99",
        alt: "Diner Doubles",
        img: "burgerchips.jpeg",
        details:"Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
        "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {   id: 3,
        name:"Godzilla Milkshake",
        price:"6.99",
        alt: "Godzilla Milkshake",
        img: "icecream.jpeg",
        details:"Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
        "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 4,
        name: "Country Delight",
        price: "20.99",
        alt: "Country Delight",
        img: "toast.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 5,
        name: "Egg attack",
        price: "22.99",
        alt: "Egg attack",
        img: "simpleburger.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 6,
        name: "Oreo Dream",
        price: "18.99",
        alt: "Oreo Dream",
        img: "milkshake.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 7,
        name: "Bacon Overflow",
        price: "8.99",
        alt: "Bacon Overflow",
        img: "savage.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 8,
        name: "American Classic",
        price: "12.99",
        alt: "American Classic",
        img: "simpleburger.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 9,
        name: "Quarantine Buddy",
        price: "16.99",
        alt: "Quarantine Buddy",
        img: "sharingshake.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    },

    {
        id: 10,
        name: "Steak Dinner",
        price: "39.99",
        alt: "Steak Dinner",
        img: "steak.jpeg",
        details: "Lorem ipsum dolor sit amet, consectetur elit adipisicing. Aliquid amet " +
            "consequuntur debitis doloremque expedita facilis mollitia non entity praesentium soluta, temporibus"
    }


]
function App({name, details, img, price}) {
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
        <div className="all-meals">
            <div className="meals">
                {cards.map((id, card)=>(
                    <Meal name={cards[0].name} price={cards[0].price} details={cards[0].details} img={cards[0].img} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
