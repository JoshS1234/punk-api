import { useParams } from "react-router-dom";
import { Beer } from "../../types/types";

type SpecificBeerProps = {
  beers: Beer[];
};

const SpecificBeer = ({ beers }: SpecificBeerProps) => {
  const { beerId } = useParams();
  const beerToShowArr = beers.filter((beer) => {
    return String(beer.id) == beerId;
  });
  if (beerToShowArr.length == 0) return <p>404 this beer was not found</p>;

  const displayBeer = beerToShowArr[0];

  return <div>{displayBeer.name}</div>;
};

export default SpecificBeer;
