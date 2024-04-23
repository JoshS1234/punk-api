import { useParams, Link } from "react-router-dom";
import { Beer } from "../../types/types";
import "./SpecificBeer.scss";

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
  console.log(displayBeer);

  return (
    <div className="beer-profile">
      <div className="beer-profile__information">
        <Link to="/">Return to beers</Link>
        <h2 className="beer-profile__title">
          How {displayBeer.name} is brewed
        </h2>
        <div className="beer-profile__ingredients-container">
          <h4>Ingredients: </h4>
          <p>
            {`-Hops: ${displayBeer.ingredients.hops
              .map((hop) => hop.name)
              .join(", ")}`}
          </p>
          <p>
            {`-Malts:
        ${displayBeer.ingredients.malt.map((malt) => malt.name).join(", ")}`}
          </p>
          <p>{`-Yeast: ${displayBeer.ingredients.yeast}`}</p>
        </div>

        <div className="beer-profile__method-container">
          <h4>Method: </h4>
          <p>
            {`-Mash at a temperature of ${displayBeer.method.mash_temp[0].temp.value} 
        ${displayBeer.method.mash_temp[0].temp.unit} for
        ${displayBeer.method.mash_temp[0].duration} minutes`}
          </p>
          <p>
            {`-Use a boil volume of ${displayBeer.boil_volume.value} 
        ${displayBeer.boil_volume.unit}.`}
          </p>
          <p>{`-Ferment at ${displayBeer.method.fermentation.temp.value} ${displayBeer.method.fermentation.temp.unit}`}</p>
        </div>

        <div className="beer-profile__brewers-tips-container">
          <h4>Brewers tips: </h4>
          <p>{`${displayBeer.brewers_tips}`}</p>
        </div>
      </div>

      <img src={`${displayBeer.image_url}`} />
    </div>
  );
};

export default SpecificBeer;
