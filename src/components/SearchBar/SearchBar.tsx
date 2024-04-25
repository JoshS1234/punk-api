import { FormEvent } from "react";
import "./SearchBar.scss";
import { Beer } from "../../types/types";

type SearchBarProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleReset: (e: FormEvent<HTMLFormElement>) => void;
  updateDisplayNumber: (e: any) => void;
  showNumber: number;
  firstShownIndex: number;
  filteredBeers: Beer[];
};

const SearchBar = ({
  handleSubmit,
  handleReset,
  updateDisplayNumber,
  showNumber,
  firstShownIndex,
  filteredBeers,
}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <div className="search-bar__search-by-name">
          <label htmlFor="searchTerm">Search by name</label>
          <input name="searchTerm" type="text" />
        </div>
        <div className="search-bar__checkbox-container">
          <label className="search-bar__checkbox">
            <input type="checkbox" />
            High ABV ({">"} 6.0%)
          </label>
          <label className="search-bar__checkbox">
            <input type="checkbox" />
            Classic range
          </label>
          <label className="search-bar__checkbox">
            <input type="checkbox" />
            Acidic (ph {"<"} 4)
          </label>
          <label className="search-bar__checkbox">
            <input type="checkbox" />
            Low alcohol
          </label>
        </div>
        <div className="search-bar__button-container">
          <button type="submit" className="search-bar__button">
            Submit
          </button>
          <button type="reset" className="search-bar__button">
            Reset
          </button>
        </div>
      </form>
      <div className="search-bar__show-amount-container">
        <select onChange={updateDisplayNumber}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <h5>{`Results ${firstShownIndex}-${
          firstShownIndex + showNumber
        } (out of ${filteredBeers.length})`}</h5>
      </div>
    </div>
  );
};

export default SearchBar;
