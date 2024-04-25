import { render, screen } from "@testing-library/react";
import LoginContainer from "./LoginContainer";

it("Renders the title of the login container page", () => {
  //arrange
  render(<LoginContainer />);

  //act
  const title = screen.getByText(/brewdog/i);

  //assert
  expect(title).toBeInTheDocument();
});

it("Whichever component is rendered should contain an email textbox", () => {
  //arrange
  render(<LoginContainer />);

  //act
  const emailTextbox = screen.getByRole("textbox", { name: /email/i });

  //assert
  expect(emailTextbox).toBeInTheDocument();
});
