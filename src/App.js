import './App.css';
import AllDishes from './components/AllDishes';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [displayMenu, setDisplayMenu] = useState();

  useEffect(() => {
    axios.get('https://r4z82l-8080.csb.app/').then((response) => setDisplayMenu(response.data.allItems));
  }, []);

  return (
    <>
      <Navbar />
      <AllDishes menu={displayMenu} />
    </>
  );
}

export default App;
