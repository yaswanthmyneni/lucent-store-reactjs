import "./signin-page.css";
import { Button } from "../../components";
import { Link, useLocation } from "react-router-dom";
import { useAuthContext, useToastContext } from "../../context";
import { submitSignInDetails } from "../../utility";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  // getting encodedToken from localStorage
  const encodedToken = localStorage.getItem("token");

  // Authentication Context
  const {
    authState: { email, password },
    authDispatch,
  } = useAuthContext();

  // from toast context
  const { toastDispatch } = useToastContext();

  // from react-router-dom
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <main className="sign-in">
        <div className="input-container sign-in-container">
          <h2 className="text-center">SignIn</h2>
          <form className="input-flex">
            <label htmlFor="email">Email Id</label>
            <input
              className="input"
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) =>
                authDispatch({ type: "EMAIL", payload: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) =>
                authDispatch({ type: "PASSWORD", payload: e.target.value })
              }
            />
            <div className="m-top-8px sign-in-flex">
              <label className="cursor" htmlFor="remember-me">
                <input className="cursor" type="checkbox" id="remember-me" />{" "}
                Remember me
              </label>
              <Link to="/forgot-password" className="cursor">
                forgot your password?
              </Link>
            </div>
            <Button
              name="SignIn"
              className="btn-primary"
              onClickFunc={(event) =>
                submitSignInDetails(
                  event,
                  email,
                  password,
                  navigate,
                  location,
                  encodedToken,
                  toastDispatch
                )
              }
            />
            <Button
              name="guest sign-in"
              className="btn-primary"
              onClickFunc={(event) =>
                submitSignInDetails(
                  event,
                  "adarshbalika@gmail.com",
                  "adarshbalika",
                  navigate,
                  location,
                  encodedToken,
                  toastDispatch,
                  authDispatch
                )
              }
            />
          </form>
          <p
            className="text-center text-lg cursor"
            onClick={() =>
              navigate("/signup", { state: { from: { pathname: "/" } } })
            }
          >
            Create New Account <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
      </main>
    </>
  );
};

export { SignInPage };
