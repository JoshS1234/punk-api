import { FormEvent } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleReset: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ handleSubmit, handleReset }: SearchBarProps) => {
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
    </div>
  );
};

export default SearchBar;
