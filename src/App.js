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
import Typography from "./components/Pages/Typography";
import Icons from "./components/Pages/Icons";
import Maps from "./components/Pages/Maps";
import Notifications from "./components/Pages/Notifications";
import Supports from "./components/Pages/Supports";
import Upgrade from "./components/Pages/Upgrade";

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
                  <Route path="/typography" component={Typography} />
                  <Route path="/icons" component={Icons} />
                  <Route path="/maps" component={Maps} />
                  <Route path="/notifications" component={Notifications} />
                  <Route path="/supports" component={Supports} />
                  <Route path="/upgrade" component={Upgrade} />
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
