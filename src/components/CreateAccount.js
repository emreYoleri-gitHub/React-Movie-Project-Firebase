import React, { useState } from "react";
import "./CreateAccount.css";
import db from "./firebase";
import alertify from "alertifyjs";
const CreateAccount = (props) => {
  const create = async (e) => {
    e.preventDefault();
    if (email.length && password.length) {
      await db.collection("users").add({
        email,
        password,
      });
      alertify.success(`User creared.`, 1);
      setEmail("");
      setPassword("");
      props.history.push("/login");
    } else {
      alertify.error(`Please fill in all fields.`, 1);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="registration-form">
        <form action="" onSubmit={(e) => create(e)}>
          <div className="form-icon">
            <i className="fas fa-user-plus"></i>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control item"
              placeholder="E-Mail"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control item"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block create-account">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
