import { useEffect, useState } from "react";
import { auth } from "../firebaseSetup";
import LoginContainer from "./components/Login/LoginContainer";
import App from "./App";

function AppContainer() {
  const [component, setComponent] = useState(<></>);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setComponent(<App />);
      } else {
        setComponent(<LoginContainer />);
      }
    });
  }, []);

  return <>{component}</>;
}

export default AppContainer;
