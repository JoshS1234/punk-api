import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import NoPage from "./components/NoPage";
import beers from "./beers";
import SpecificBeer from "./components/SpecificBeerPage/SpecificBeer";
import Sommelier from "./components/Sommelier";

function App() {
  return (
    <div className="app">
      <HeaderBar />
      <Nav />
      <Routes>
        <Route path="/" element={<Home beers={beers} />} />
        <Route path="/beers/:beerId" element={<SpecificBeer beers={beers} />} />
        <Route path="/sommelier" element={<Sommelier beers={beers} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
