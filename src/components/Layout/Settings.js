import React, { Component } from "react";

class Settings extends Component {
  render() {
    return (
      <div className="fixed-plugin">
        <div className="dropdown show-dropdown">
          <a href="#!" data-toggle="dropdown">
            <i className="fa fa-cog fa-2x"> </i>
          </a>
          <ul className="dropdown-menu">
            <li className="header-title"> Sidebar Filters</li>
            <li className="adjustments-line">
              <a href="#!" className="switch-trigger active-color">
                <div className="badge-colors ml-auto mr-auto">
                  <span
                    className="badge filter badge-purple"
                    data-color="purple"
                  />
                  <span
                    className="badge filter badge-azure"
                    data-color="azure"
                  />
                  <span
                    className="badge filter badge-green"
                    data-color="green"
                  />
                  <span
                    className="badge filter badge-warning"
                    data-color="orange"
                  />
                  <span
                    className="badge filter badge-danger"
                    data-color="danger"
                  />
                  <span
                    className="badge filter badge-rose active"
                    data-color="rose"
                  />
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li className="header-title">Images</li>
            <li className="active">
              <a className="img-holder switch-trigger" href="#!">
                <img src="./img/sidebar-1.jpg" alt="" />
              </a>
            </li>
            <li>
              <a className="img-holder switch-trigger" href="#!">
                <img src="./img/sidebar-2.jpg" alt="" />
              </a>
            </li>
            <li>
              <a className="img-holder switch-trigger" href="#!">
                <img src="./img/sidebar-3.jpg" alt="" />
              </a>
            </li>
            <li>
              <a className="img-holder switch-trigger" href="#!">
                <img src="./img/sidebar-4.jpg" alt="" />
              </a>
            </li>
            <li className="button-container">
              <a
                href="#!"
                className="btn btn-primary btn-block"
              >
                Free Download
              </a>
            </li>
            <li className="button-container">
              <a
                href="#!"
                className="btn btn-default btn-block"
              >
                View Documentation
              </a>
            </li>
            <li className="button-container github-star">
              <a
                className="github-button"
                href="#!"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star ntkme/github-buttons on GitHub"
              >
                Star
              </a>
            </li>
            <li className="header-title">Thank you for 95 shares!</li>
            <li className="button-container text-center">
              <button id="twitter" className="btn btn-round btn-twitter">
                <i className="fa fa-twitter" /> · 45
              </button>
              <button id="facebook" className="btn btn-round btn-facebook">
                <i className="fa fa-facebook-f" /> · 50
              </button>
              <br />
              <br />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Settings;