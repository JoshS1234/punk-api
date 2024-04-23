import "./LoginStyles.scss";

type LoginForgotPasswordProps = {
  handleSwitchToCurrUser: () => void;
  handleForgotPasswordEmail: () => void;
};

const LoginForgotPassword = ({
  handleSwitchToCurrUser,
  handleForgotPasswordEmail,
}: LoginForgotPasswordProps) => {
  return (
    <div className="login-page">
      <form className="login-page__form" onSubmit={handleForgotPasswordEmail}>
        <label className="login-page__form-label" htmlFor="email">
          Email
        </label>
        <input type="text" className="login-page__form-textbox" name="email" />
        <button type="submit" className="login-page__form-button">
          Submit
        </button>
        <button
          type="button"
          onClick={handleSwitchToCurrUser}
          className="login-page__form-button"
        >
          I know my login
        </button>
      </form>
    </div>
  );
};

export default LoginForgotPassword;
