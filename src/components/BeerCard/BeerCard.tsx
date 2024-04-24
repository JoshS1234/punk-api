import { useState } from "react";
import { Beer } from "../../types/types";
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
      <div className="beer-card__information">
        <h5>{beer.tagline}</h5>
        <h5>{beer.abv}% ABV</h5>
        <h5>{beer.first_brewed}</h5>
        <h5>{beer.ph} ph</h5>
        <img className="beer-card__image" src={beer.image_url} />
        <h5>Pairs with: </h5>
        {beer.food_pairing.map((food) => {
          return <p key={food}>-{food}</p>;
        })}
      </div>
      <Link className="beer-card__link" to={`/beers/${beer.id}`}>
        Brewing tips
      </Link>
    </div>
  ) : (
    <div className="beer-card beer-card--back">
      <div className="beer-card__header">
        <h4>{beer.name}</h4>
        <button onClick={toggleShowFront}>Summary</button>
      </div>
      <div className="beer-card__information">
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
      </div>
      <Link className="beer-card__link" to={`/beers/${beer.id}`}>
        Brewing tips
      </Link>
    </div>
  );
};

export default BeerCard;
