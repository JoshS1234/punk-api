import { useState } from "react";
import { Beer } from "../types/types";
import "./BeerCard.scss";
import { Link } from "react-router-dom";

type BeerCardProps = {
  beer: Beer;
};

const BeerCard = ({ beer }: BeerCardProps) => {
  const hasShortDescription = beer.description.length < 200;
  const [showFront, setShowFront] = useState(true);
  const [showFullDescription, setShowFullDescription] =
    useState(hasShortDescription);

  const toggleShowDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleShowFront = () => {
    setShowFront(!showFront);
  };

  return showFront ? (
    <div className="beer-card  beer-card--front">
      <div className="beer-card__header">
        <h4>{beer.name}</h4>
        <button onClick={toggleShowFront}>Description</button>
      </div>
      <h5>{beer.tagline}</h5>
      <h5>{beer.abv}% ABV</h5>
      <img className="beer-card__image" src={beer.image_url} />
      <h5>Pairs with: </h5>
      {beer.food_pairing.map((food) => {
        return <p key={food}>-{food}</p>;
      })}
      <Link to={`/beers/${beer.id}`}>Profile page</Link>
    </div>
  ) : (
    <div className="beer-card beer-card--back">
      <div className="beer-card__header">
        <h4>{beer.name}</h4>
        <button onClick={toggleShowFront}>Summary</button>
      </div>
      <img className="beer-card__image" src={beer.image_url} />

      <div className="beer-card__description-container">
        {hasShortDescription ? (
          <p>{beer.description}</p>
        ) : showFullDescription ? (
          <>
            <p>{beer.description}</p>
            <button onClick={toggleShowDescription}>Read less</button>
          </>
        ) : (
          <>
            <p>{beer.description.slice(0, 200) + "..."}</p>
            <button onClick={toggleShowDescription}>Read more</button>
          </>
        )}
      </div>
      <Link to={`/beers/${beer.id}`}>Profile page</Link>
    </div>
  );
};

export default BeerCard;
