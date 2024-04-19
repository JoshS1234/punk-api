import "./App.scss";
import HeaderBar from "./components/HeaderBar";
import BeerContainer from "./containers/BeerContainer/BeerContainer";
import SearchContainer from "./components/SearchBar/SearchBar";
import beers from "./beers";
import { useState } from "react";
import { FormEvent } from "react";

function App() {
  const [filteredBeers, setFilteredBeers] = useState(beers);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const targetSearchTerm = event.currentTarget[0] as HTMLInputElement;
    const searchTerm = targetSearchTerm.value.toLowerCase();

    const targetIsStrong = event.currentTarget[1] as HTMLInputElement;
    const isStrong = targetIsStrong.checked;

    const targetIsClassic = event.currentTarget[2] as HTMLInputElement;
    const isClassic = targetIsClassic.checked;

    const targetIsAcidic = event.currentTarget[3] as HTMLInputElement;
    const isAcidic = targetIsAcidic.checked;

    let tempBeer = beers.filter((beer) => {
      return beer.name.toLowerCase().includes(searchTerm);
    });
    if (isStrong) {
      tempBeer = tempBeer.filter((beer) => {
        return beer.abv > 6;
      });
    }
    if (isClassic) {
      tempBeer = tempBeer.filter((beer) => {
        const yearFirstBrewed = parseInt(beer.first_brewed.split("/")[1]);
        return yearFirstBrewed < 2010;
      });
    }

    if (isAcidic) {
      tempBeer = tempBeer.filter((beer) => {
        return beer.ph < 4;
      });
    }

    setFilteredBeers(tempBeer);
    // event.currentTarget.reset();
  };

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    setFilteredBeers(beers);
    event.currentTarget.reset();
  };

  return (
    <div className="app">
      <HeaderBar />
      <div className="app__page-content">
        <div className="app__search-container-div">
          <SearchContainer
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        </div>
        <div className="app__beer-container-div">
          <h2>Beer list</h2>
          {filteredBeers && <BeerContainer beers={filteredBeers} />}
        </div>
      </div>
    </div>
  );
}

export default App;
