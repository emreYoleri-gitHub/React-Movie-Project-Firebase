import React, { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { dataActions } from "../redux/actions";
import { withRouter } from "react-router-dom";
import alertify from "alertifyjs";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { selectUser } = bindActionCreators(dataActions, dispatch);
  const users = useSelector((state) => state.dataReducer.users);
  const movie = useSelector((state) => state.movieReducer.currentMovie);

  const submitHandler = (e) => {
    e.preventDefault();
    users.map(async (user) => {
      if (user.email === email && user.password === password) {
        await selectUser(user);
        setEmail("");
        setPassword("");
        alertify.success("Sisteme Giriş Yapıldı.", 1);
        props.history.push(`/movies/${movie.imdbID}`);
      }
    });
  };
  if (movie && users) {
    return (
      <div className="container login-container">
        <div className="row">
          <div className="col-md-6 login-form-1 mx-auto">
            <h3>Login Panel</h3>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group my-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Password *"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input type="submit" className="btnSubmit" value="Login" />
              </div>
              <div className="form-group">
                <a href="/createAccount" className="ForgetPwd">
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    props.history.push("/");
    return <div></div>;
  }
};

export default withRouter(Login);
