import BeerCard from "../../components/BeerCard/BeerCard";
import { Beer } from "../../types/types";
import "./BeerContainer.scss";

type BeerContainerProps = {
  beers: Beer[];
  incrementPage: () => void;
  decrementPage: () => void;
  updateDisplayNumber: (e: any) => void;
  showNumber: number;
  firstShownIndex: number;
  filteredBeers: Beer[];
};

const BeerContainer = ({
  beers,
  showNumber,
  firstShownIndex,
  incrementPage,
  decrementPage,
  updateDisplayNumber,
  filteredBeers,
}: BeerContainerProps) => {
  const noBeers = filteredBeers.length == 0;

  return (
    <div>
      {noBeers ? (
        <h1 className="beer-container__no-beer-message">No beers found...</h1>
      ) : (
        <div className="beer-container">
          {beers.map((beer) => {
            return <BeerCard beer={beer} key={beer.id} />;
          })}
        </div>
      )}
      <div className="home-container-heading__results-sortbar">
        <div>
          <select onChange={updateDisplayNumber}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <h5>{`Results ${firstShownIndex}-${
            firstShownIndex + showNumber
          } (out of ${filteredBeers.length})`}</h5>
        </div>
        <div>
          <button onClick={decrementPage}>Previous</button>
          <button onClick={incrementPage}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default BeerContainer;
