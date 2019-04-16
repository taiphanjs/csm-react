import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Sidebar from "./components/Layout/Sidebar";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Settings from "./components/Layout/Settings";
import DashBoard from "./components/Pages/DashBoard";
import Users from "./components/Pages/Users";
import Table from "./components/Pages/Table";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className="wrapper ">
            <Sidebar />
            <div className="main-panel">
              <Navbar />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={DashBoard} />
                  <Route path="/users" component={Users} />
                  <Route path="/table" component={Table} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
          <Settings />
        </Fragment>
      </Router>
    );
  }
}

export default App;
