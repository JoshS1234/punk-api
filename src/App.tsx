import "./App.scss";
import HeaderBar from "./components/HeaderBar";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import beers from "./beers";

function App() {
  return (
    <div className="app">
      <HeaderBar />
      <Nav />
      <Home beers={beers} />
    </div>
  );
}

export default App;
