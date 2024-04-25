import { useEffect } from "react";
import { Beer } from "../../types/types";
import { auth, db } from "../../../firebaseSetup";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import BeerCard from "../BeerCard/BeerCard";
import "./Favourites.scss";

type FavouritesProps = {
  beers: Beer[];
};

const Favourites = ({ beers }: FavouritesProps) => {
  const [favouriteBeersDB, setFavouriteBeersDB] = useState<string[]>([]);
  const [displayBeers, setDisplayBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    // setIsLoading(true);
    setIsLoading(false);

    if (auth.currentUser) {
      const docRef = doc(db, "users", auth.currentUser.uid);

      getDoc(docRef).then((data) => {
        if (data.exists()) {
          setFavouriteBeersDB(data.data().favouriteBeers);
          const filteredBeers = beers.filter((beer) => {
            return favouriteBeersDB.includes(beer.name);
          });
          setDisplayBeers(filteredBeers);
        }

        setIsLoading(false);
      });
    }
  });

  return isLoading ? (
    <p>Loading...</p>
  ) : displayBeers.length == 0 ? (
    <h1 className="beer-container__no-beer-message">No beers found...</h1>
  ) : (
    <div className="favourites-beer-container">
      {displayBeers.map((beer) => {
        return <BeerCard beer={beer} key={beer.id} />;
      })}
    </div>
  );
};

export default Favourites;
