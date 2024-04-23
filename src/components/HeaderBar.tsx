import "./HeaderBar.scss";
import { auth } from "../../firebaseSetup";
import { signOut } from "firebase/auth";

const HeaderBar = () => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="header-bar">
      <h1 className="header-bar__title">Brewdog encyclopedia</h1>
      <button className="header-bar__logout" onClick={handleSignOut}>
        Log out
      </button>
    </div>
  );
};

export default HeaderBar;
