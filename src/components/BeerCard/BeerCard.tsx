import { useEffect, useState } from "react";
import { Beer } from "../../types/types";
import "./BeerCard.scss";
import { Link } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../firebaseSetup.ts";

type BeerCardProps = {
  beer: Beer;
};

const BeerCard = ({ beer }: BeerCardProps) => {
  const hasShortDescription = beer.description.length < 200;
  const [showFront, setShowFront] = useState(true);
  const [showFullDescription, setShowFullDescription] =
    useState(hasShortDescription);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const toggleShowDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const toggleShowFront = () => {
    setShowFront(!showFront);
  };

  const toggleFavourite = () => {
    if (auth.currentUser) {
      getDoc(doc(db, "users", auth.currentUser.uid)).then((data) => {
        if (data.exists()) {
          if (auth.currentUser) {
            const docRef = doc(db, "users", auth.currentUser.uid);
            if (isFavourite) {
              const removedBeer = data
                .data()
                .favouriteBeers.filter((thisBeer: string) => {
                  return thisBeer != beer.name;
                });
              setIsFavourite(false);
              return updateDoc(docRef, {
                favouriteBeers: removedBeer,
              });
            } else {
              setIsFavourite(true);
              return updateDoc(docRef, {
                favouriteBeers: [...data.data().favouriteBeers, beer.name],
              });
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    if (auth.currentUser) {
      getDoc(doc(db, "users", auth.currentUser.uid)).then((data) => {
        if (data.exists()) {
          if (data.data().favouriteBeers.includes(beer.name)) {
            setIsFavourite(true);
          } else {
            setIsFavourite(false);
          }
        } else {
          setIsFavourite(false);
        }
        setIsLoading(false);
      });
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : showFront ? (
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
      <div className="beer-card__footer-button-container">
        <button onClick={toggleFavourite}>
          {isFavourite ? "Unfavourite" : "Favourite"}
        </button>
        <Link className="beer-card__link" to={`/beers/${beer.id}`}>
          Brewing tips
        </Link>
      </div>
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
      <div>
        <button onClick={toggleFavourite}>
          {isFavourite ? "Unfavourite" : "Favourite"}
        </button>
        <Link className="beer-card__link" to={`/beers/${beer.id}`}>
          Brewing tips
        </Link>
      </div>
    </div>
  );
};

export default BeerCard;
