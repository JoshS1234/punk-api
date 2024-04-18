import BeerCard from "../../components/BeerCard";
import { Beer } from "../../types/types";
import "./BeerContainer.scss";

type BeerContainerProps = {
  beers: Beer[];
};

const BeerContainer = ({ beers }: BeerContainerProps) => {
  return (
    <div className="beer-container">
      {beers.map((beer) => {
        return <BeerCard beer={beer} key={beer.id} />;
      })}
    </div>
  );
};

export default BeerContainer;
