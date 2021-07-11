import React, { useState } from "react";
import "./CreateAccount.css";
import db from "./firebase";
import alertify from "alertifyjs";
const CreateAccount = (props) => {
  const create = (e) => {
    e.preventDefault();
    if (email && password) {
      db.collection("users").add({
        email,
        password,
      });
      alertify.success(`Kullanıcı Oluşturuldu.`, 1);
      setEmail(null);
      setPassword(null);
      props.history.push("/login");
    } else {
      alertify.error(`Lütfen Alanların Hepsini Doldurunuz.`, 1);
    }
  };
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <>
      <div className="registration-form">
        <form action="" onSubmit={(e) => create(e)}>
          <div className="form-icon">
            <i class="fas fa-user-plus"></i>
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
