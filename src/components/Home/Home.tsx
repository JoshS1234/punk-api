import BeerContainer from "../../containers/BeerContainer/BeerContainer";
import SearchBar from "../SearchBar/SearchBar";
import { ChangeEvent, useEffect, useState } from "react";
import { FormEvent } from "react";
import { Beer } from "../../types/types";
import "./Home.scss";

type HomeProps = {
  beers: Beer[];
};

const Home = ({ beers }: HomeProps) => {
  const [filteredBeers, setFilteredBeers] = useState(beers);
  const [beersToShow, setBeersToShow] = useState(filteredBeers);

  const [showNumber, setShowNumber] = useState<number>(10);
  const [firstShownIndex, setFirstShownIndex] = useState<number>(0);

  useEffect(() => {
    let tempBeers = filteredBeers.slice(
      firstShownIndex,
      firstShownIndex + showNumber
    );
    setBeersToShow(tempBeers);
  }, [filteredBeers, firstShownIndex, showNumber]);

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

    const targetIsLowAlcohol = event.currentTarget[4] as HTMLInputElement;
    const isLowAlcohol = targetIsLowAlcohol.checked;

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

    if (isLowAlcohol) {
      tempBeer = tempBeer.filter((beer) => {
        return beer.abv < 1;
      });
    }

    setFirstShownIndex(0);
    setFilteredBeers(tempBeer);
  };

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    setFirstShownIndex(0);
    setFilteredBeers(beers);
    event.currentTarget.reset();
  };

  const updateDisplayNumber = (e: ChangeEvent<HTMLSelectElement>) => {
    setShowNumber(Number(e.target.value));
    setFirstShownIndex(0);
  };

  const incrementPage = () => {
    if (firstShownIndex + showNumber < filteredBeers.length) {
      setFirstShownIndex(firstShownIndex + showNumber);
    }
  };

  const decrementPage = () => {
    if (firstShownIndex - showNumber < 0) {
      setFirstShownIndex(0);
    } else {
      setFirstShownIndex(firstShownIndex - showNumber);
    }
  };

  return (
    <div className="home">
      <div className="home__page-content">
        <div className="home__search-container-div">
          <h2 className="home__container-heading">Filters</h2>
          <SearchBar handleSubmit={handleSubmit} handleReset={handleReset} />
        </div>
        <div className="home__beer-container-div">
          <div className="home__container-heading">
            <button onClick={decrementPage}>Previous</button>
            <h2>Beer list</h2>
            <button onClick={incrementPage}>Next</button>
          </div>
          {filteredBeers && (
            <BeerContainer
              beers={beersToShow}
              incrementPage={incrementPage}
              decrementPage={decrementPage}
              updateDisplayNumber={updateDisplayNumber}
              showNumber={showNumber}
              firstShownIndex={firstShownIndex}
              filteredBeers={filteredBeers}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
