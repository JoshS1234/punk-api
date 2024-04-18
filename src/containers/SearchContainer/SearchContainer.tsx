import { FormEvent } from "react";
import Filters from "../../components/Filters";
import SearchByName from "../../components/SearchByName";
import "./SearchContainer.scss";

type SearchContainerProps = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleReset: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchContainer = ({
  handleSubmit,
  handleReset,
}: SearchContainerProps) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <SearchByName />
        <Filters />
        <div className="search-container__form-button-container">
          <button type="submit" className="search-container__form-button">
            Submit
          </button>
          <button type="reset" className="search-container__form-button">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchContainer;
