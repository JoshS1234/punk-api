import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/sommelier">Sommelier</Link>
      <Link to="./favourites">Favourites</Link>
    </div>
  );
};

export default Nav;
