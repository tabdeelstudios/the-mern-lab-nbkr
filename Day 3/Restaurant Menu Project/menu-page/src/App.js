import './App.css';
import AllDishes from './components/AllDishes';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [displayMenu, setDisplayMenu] = useState();
  const [cookieData, setCookieData] = useState();

  document.cookie = cookieData;
  localStorage.setItem("name", "John Doe");

  useEffect(() => {
    axios.get('https://r4z82l-8080.csb.app/').then((response) => { setDisplayMenu(response.data.allItems); setCookieData(response.data.cookieData.name) });
  }, []);

  function getAllItems() {
    axios.get('https://r4z82l-8080.csb.app/').then((response) => setDisplayMenu(response.data.allItems));
  }

  function applyFilter(filter) {
    axios.post('https://r4z82l-8080.csb.app/', { "category": filter }).then((response) => setDisplayMenu(response.data.allItems));
  }

  return (
    <>
      <Navbar />
      <div id="buttons">
        <button onClick={getAllItems}>All</button>
        <button onClick={() => applyFilter("breakfast")}>Breakfast</button>
        <button onClick={() => applyFilter("lunch")}>Lunch</button>
        <button onClick={() => applyFilter("shakes")}>Shakes</button>
        <button onClick={() => applyFilter("dinner")}>Dinner</button>
      </div>
      <AllDishes menu={displayMenu} />

    </>
  );
}

export default App;
