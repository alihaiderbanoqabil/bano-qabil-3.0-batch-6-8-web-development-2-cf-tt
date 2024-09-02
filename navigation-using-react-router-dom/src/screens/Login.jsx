import * as React from "react";
import { Navigate } from "react-router-dom";

export class Login extends React.Component {
  state = { user: null, error: null };

  async handleSubmit(event) {
    event.preventDefault();
    try {
      const [usernameInput, passwordInput] = event.target;
      //   let user = await login(event.target);
      const user = {
        username: usernameInput.value,
        password: passwordInput.value,
      };
      console.log({ target: event.target, user });
      this.setState({ user: user });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    let { user, error } = this.state;
    return (
      <div>
        {error && <p>{error.message}</p>}
        {user && <Navigate to="/posts" replace={false} stat />}
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
