import React,  {Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import AddCollection from "./components/add-collection";
import Collection from "./components/collection";
import CollectionsList from "./components/collections-list" 


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/collections" className="navbar-brand">
            Awesome
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/collections"} className="nav-link">
                Collections
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
        <Switch>
            <Route exact path={["/", "/collections"]} component={CollectionsList} /> 
            <Route exact path="/add" component={AddCollection} />
            <Route path="/collections/:id" component={Collection} /> 
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;