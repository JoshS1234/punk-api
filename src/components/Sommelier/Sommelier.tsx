import { Beer } from "../../types/types";
import scientist from "../../assets/scientist.svg";
import "./Sommelier.scss";
import { FormEvent, useEffect } from "react";
import { useState } from "react";

type SommelierProps = {
  beers: Beer[];
};

const Sommelier = ({ beers }: SommelierProps) => {
  const [displayBeer, setDisplayBeer] = useState<Beer>();
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const allFoodPairings: string[] = [];
  beers.forEach((beer) => {
    for (let i: number = 0; i < beer.food_pairing.length; i++) {
      if (!allFoodPairings.includes(beer.food_pairing[i])) {
        allFoodPairings.push(beer.food_pairing[i]);
      }
    }
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const targetFood = e.currentTarget[0] as HTMLFormElement;
    const foodToPair = targetFood.value;
    let filteredBeers = beers.filter((beer) => {
      console.log(beer);
      return beer.food_pairing.some((food) => {
        console.log(foodToPair);
        return food.toLowerCase().includes(foodToPair.toLowerCase());
      });
    });
    setDisplayBeer(filteredBeers[0]);
    setHasSearched(true);
  };

  const clearBeer = () => {
    setHasSearched(false);
    setDisplayBeer(undefined);
  };

  return (
    <div className="sommelier-page">
      <img src={scientist} className="sommelier-page__image" />
      <div className="sommelier-page__content">
        <div className="sommelier-page__explanation">
          <p>
            I am your virtual beer expert, I can recommend you a drink based on
            a food pairing. What are you having to eat?
          </p>
        </div>
        <div className="sommelier-page__recommendation">
          <p>Recommendation: </p>
          {displayBeer?.name ? (
            <div>
              <h3>{displayBeer?.name}</h3>
              <p>Pairs with:</p>
              {displayBeer.food_pairing.map((food, index) => {
                return <p key={index}>{food}</p>;
              })}
            </div>
          ) : hasSearched ? (
            <p>Nothing found for this, so have anything!</p>
          ) : (
            <p>Search for a food!</p>
          )}
        </div>
        <form onSubmit={handleSubmit} className="sommelier-page__form">
          <label>Food:</label>
          <input type="text" />
          <div className="sommelier-page__form-button-container">
            <button type="submit">Submit</button>
            <button type="reset" onClick={clearBeer}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sommelier;
