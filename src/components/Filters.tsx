import "./Filters.scss";

const Filters = () => {
  return (
    <div className="filter-checkbox-container">
      <label className="filters-container__checkbox">
        <input type="checkbox" />
        High ABV ({">"} 6.0%)
      </label>
      <label className="filters-container__checkbox">
        <input type="checkbox" />
        Classic range
      </label>
      <label className="filters-container__checkbox">
        <input type="checkbox" />
        Acidic (ph {"<"} 4)
      </label>
    </div>
  );
};

export default Filters;
