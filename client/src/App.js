import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import Read from "./components/pages/Read";
import Write from "./components/pages/Write";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/layout/Footer";
import Privateroute from "./routes/Privateroute";
import { BlogContext } from "./context";

const App = () => {
  const {
    post: { _id },
  } = React.useContext(BlogContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path={`/${_id}`} component={Read} />
        <Privateroute component={Write} exact path="/writeblog" />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
};

export default withRouter(App);
