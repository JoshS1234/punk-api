import { Route, Routes } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import Home from "./components/Home/Home";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import NoPage from "./components/NoPage";
import SpecificBeer from "./components/SpecificBeerPage/SpecificBeer";
import Sommelier from "./components/Sommelier/Sommelier";
import { useEffect, useState } from "react";
import { Beer } from "./types/types";

const App = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getBeers = async () => {
    let totalArr: Beer[] = [];
    for (let i: number = 1; i < 8; i++) {
      const response = await fetch(
        `http://localhost:3333/v2/beers/?per_page=50&page=${i}`
      );
      if (response.ok) {
        const formattedResponse = await response.json();
        totalArr = totalArr.concat(formattedResponse);
      } else {
        throw new Error("didn't work");
      }
    }
    return totalArr;
  };

  useEffect(() => {
    setIsLoading(true);
    getBeers().then((data) => {
      setBeers(data);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
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
};

export default App;
