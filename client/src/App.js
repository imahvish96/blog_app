import React from 'react';
import './App.css';
import Blog from './Components/Blog';
import Header from './Components/Header';
import { Route, Switch } from 'react-router-dom';
import ReadBlog from './Components/ReadBlog';
import WriteBlog from './Components/WriteBlog';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Privateroute from './Components/Privateroute';
import { BlogContext } from './Context';

const App = () => {
  const {
    post: { _id },
  } = React.useContext(BlogContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/api" component={Blog} />
        <Route path={`/api/${_id}`} component={ReadBlog} />
        <Privateroute component={WriteBlog} exact path="/api/writeblog" />
        <Route exact path="/api/login" component={Login} />
        <Route exact path="/api/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
