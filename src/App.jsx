import { useEffect, useState } from "react"
import CarList from "./components/5/CarList"
import ProdsList from "./components/5/ProdsList"

function App() {

  const [ data, setData ] = useState([]);

  // useEffect( () => {
  //   fetch('./products.json')
  //     .then( resp => resp.json())
  //     .then( prods => setData(prods) )
  //     .catch( err => console.error('Fetching fails: ',err));
  // },[] );

  useEffect ( () => {
    const fetchData = async () => {
      try {
        const resp = await fetch("./prods.json");
        if(!resp.ok) throw new Error('Erro from Data commection');
        const prods = await resp.json();
        setData(prods);
      } catch (err) {
        console.error("Error", err.message);
      }
    };

    fetchData();
  },[]);

  return (
    <> 
      < ProdsList data={data} />
      < CarList />
    </>
  )
}

export default App
