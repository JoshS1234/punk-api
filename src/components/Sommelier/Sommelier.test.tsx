import { render, screen } from "@testing-library/react";
import Sommelier from "./Sommelier";
import beers from "../../beers";

it("should render the image of the sommelier", () => {
  render(<Sommelier beers={beers} />);

  const sommelierImage = screen.getByRole("img");

  expect(sommelierImage).toBeInTheDocument();
});
