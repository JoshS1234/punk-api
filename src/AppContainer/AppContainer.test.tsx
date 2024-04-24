import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AppContainer from "./AppContainer";

it("should render the form", () => {
  //1. Arrange
  // render(<AppContainer />);
  render(<AppContainer />);

  //2. Act
  const wholeApp = screen.getByLabelText("whole-app", { exact: false });

  //3. Assert
  expect(wholeApp).toBeInTheDocument();
});
