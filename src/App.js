import './App.css';
import { useState } from "react";
import {Dropdown, Button, Card} from "react-bootstrap";
import MovieItem from "./components/MovieItem";
import movieData from "./assets/data.json";
import Aggregator from "./components/Aggregator"

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [director, setDirector] = useState("All");
  const [runtime, setRuntime] = useState(400);
  const [sorter, setSorter] = useState(false);

  const selectFilterDirector = eventKey => {
    setDirector(eventKey);
  };

  const selectSorter = eventKey => {
    setSorter(eventKey);
  };

  const selectFilterRuntime = eventKey => {
    setRuntime(eventKey);
  };
  

  const matchesFilterType = movie => {
    if (movie.runtime <= runtime) {
      if (director === "All") {
        return true
      } else if (movie.director === director) {
        return true
      } else {
        return false
      }
    } else {
      return false;
    }
  }

  function resetter() {
    setDirector("All");
    setSorter("Default");
    setRuntime(400)
  }

  let filteredData = movieData.filter(matchesFilterType)

  let sortedData = (sorter === "Runtime" ? filteredData.sort((a, b) => {return a.runtime - b.runtime}) :
    filteredData.sort((a, b) => {return a.release_year - b.release_year}))

  return (
    <div className="App">
      <h1>Studio Ghibli Movies</h1>
      <hr></hr>

      <row>
        <tr>
        <th id="th2">
          <div id="four">
            <div id="zero">
              <Button id="reset" onClick={resetter}>Reset</Button>
              <h4>Filters</h4>
              <Dropdown onSelect={selectFilterDirector}>
                <Dropdown.Toggle variant="success">
                  Director
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item eventKey="All">All</Dropdown.Item>
                  <Dropdown.Item eventKey="Hayao Miyazaki">Hayao Miyazaki</Dropdown.Item>
                  <Dropdown.Item eventKey="Isao Takahata">Isao Takahata</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown onSelect={selectFilterRuntime}>
                <Dropdown.Toggle variant="success">
                  Runtime
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item eventKey={400}>All</Dropdown.Item>
                  <Dropdown.Item eventKey={90}>Within 1.5 Hours</Dropdown.Item>
                  <Dropdown.Item eventKey={120}>Within 2 Hours</Dropdown.Item>
                  <Dropdown.Item eventKey={150}>Within 2.5 Hours</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <h4>Sorting</h4>
              <Dropdown onSelect={selectSorter}>
                <Dropdown.Toggle variant="success">
                  Sort By
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item eventKey="Default">Default (Release Year)</Dropdown.Item>
                  <Dropdown.Item eventKey="Runtime">Runtime (Ascending)</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div id ="two">
            <h2>Favorites</h2>
            <div id="items">
              <Aggregator cart={cart} total={total}></Aggregator>
            </div>
            </div>
            </div>
          </th>
          <th id="one">
            {sortedData.map((item, index) => (
            <MovieItem cart={cart} total={total} setTotal={setTotal} setCart={setCart} name={item.name} director={item.director} release_year={item.release_year} runtime={item.runtime} image={item.image}></MovieItem>
            ))}
          </th>
        </tr>
      </row>
    </div>
  );
}

export default App;
