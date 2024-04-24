import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BeerCard from "./BeerCard";
import beers from "../../beers";
import { BrowserRouter } from "react-router-dom";

it("should render the beercard title correctly", () => {
  //arrange
  render(
    <BrowserRouter>
      <BeerCard beer={beers[0]} />
    </BrowserRouter>
  );

  //act
  const beerCardTitle = screen.getByText(`${beers[0].name}`, { exact: false });
  //assert
  expect(beerCardTitle).toBeInTheDocument();
  expect(beerCardTitle).toBeVisible();
  expect(beerCardTitle).toHaveTextContent(`${beers[0].name}`);
});

it("When the user presses the description button, it should show the beer description, and the button should switch to say summary", async () => {
  //arrange
  render(
    <BrowserRouter>
      <BeerCard beer={beers[0]} />
    </BrowserRouter>
  );

  //act

  //check buttons are correctly displayed (pre-button press)
  let showDescriptionButton = screen.getByText("description", {
    exact: false,
  }) as HTMLElement | null;
  let showSummaryButton = screen.queryByText("summary", {
    exact: false,
  }) as HTMLElement | null;
  expect(showDescriptionButton).toBeInTheDocument();
  expect(showSummaryButton).not.toBeInTheDocument();

  let descriptionText = screen.queryByText(
    `${beers[0].description.slice(0, 10)}`,
    { exact: false }
  );
  expect(descriptionText).not.toBeInTheDocument();

  await userEvent.click(showDescriptionButton);

  showDescriptionButton = screen.queryByText("description", {
    exact: false,
  }) as HTMLElement | null;
  showSummaryButton = screen.getByText("summary", {
    exact: false,
  }) as HTMLElement | null;
  expect(showDescriptionButton).not.toBeInTheDocument();
  expect(showSummaryButton).toBeInTheDocument();

  descriptionText = screen.queryByText(`${beers[0].description.slice(0, 10)}`, {
    exact: false,
  });
  expect(descriptionText).toBeInTheDocument();
});
