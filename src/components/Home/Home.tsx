import BeerContainer from "../../containers/BeerContainer/BeerContainer";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { FormEvent } from "react";
import { Beer } from "../../types/types";
import "./Home.scss";

type HomeProps = {
  beers: Beer[];
};

const Home = ({ beers }: HomeProps) => {
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
    <div className="home">
      <div className="home__page-content">
        <div className="home__search-container-div">
          <h2 className="home__container-heading">Filters</h2>
          <SearchBar handleSubmit={handleSubmit} handleReset={handleReset} />
        </div>
        <div className="home__beer-container-div">
          <h2 className="home__container-heading">Beer list</h2>
          {filteredBeers && <BeerContainer beers={filteredBeers} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
