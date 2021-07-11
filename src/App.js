import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Input from "./components/Input";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import Login from "./components/Login"
import CreateAccount from "./components/CreateAccount"

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Input} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/movies/:imdbID" component={Movie} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createAccount" component={CreateAccount} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
