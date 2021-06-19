import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import './App.css';
import Blog from './Components/Blog';
import Home from './Components/Home';
import Header from './Components/Header'
import { BrowserRouter } from "react-router-dom";
import Newblog from './Components/Newblog';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/new" component={Newblog} />

          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
