import "./SearchByName.scss";

const SearchByName = () => {
  return (
    <div className="search-container__search-by-name">
      <label htmlFor="searchTerm">Search by name</label>
      <input name="searchTerm" type="text" />
    </div>
  );
};

export default SearchByName;
