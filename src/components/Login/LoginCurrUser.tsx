import "./LoginStyles.scss";

type LoginCurrUserProps = {
  handleSignIn: (Event) => void;
  handleSwitchToNewUser: () => void;
  handleSwitchToForgotPass: () => void;
};

const LoginCurrUser = ({
  handleSignIn,
  handleSwitchToForgotPass,
  handleSwitchToNewUser,
}: LoginCurrUserProps) => {
  return (
    <div className="login-page">
      <form className="login-page__form" onSubmit={handleSignIn}>
        <label className="login-page__form-label" htmlFor="email">
          Email
        </label>
        <input type="text" className="login-page__form-textbox" name="email" />
        <label className="login-page__form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="login-page__form-textbox"
          name="password"
        />
        <button type="submit" className="login-page__form-button">
          Submit
        </button>
        <button
          type="button"
          className="login-page__form-button"
          onClick={handleSwitchToNewUser}
        >
          New user
        </button>
        <button
          type="button"
          className="login-page__form-button"
          onClick={handleSwitchToForgotPass}
        >
          Forgot password
        </button>
      </form>
    </div>
  );
};

export default LoginCurrUser;
