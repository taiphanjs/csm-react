import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';

class Settings extends Component {
  state = {
    lines: [
      {
        class: 'badge filter badge-purple',
        color: '#9368E9'
      },
      {
        class: 'badge filter badge-azure',
        color: '#2CA8FF'
      },
      {
        class: 'badge filter badge-green',
        color: '#18ce0f'
      },
      {
        class: 'badge filter badge-purple',
        color: '#fd9b16'
      },
      {
        class: 'badge filter badge-warning',
        color: '#9368e9'
      },
      {
        class: 'badge filter badge-danger',
        color: '#f44336'
      },
      {
        class: 'badge filter badge-rose',
        color: '#e91e63'
      },
    ],    
  }
  render() {
    const { lines } = this.state;
    const { colorActive, setActiveColor, activeIndexBGSidebar, setBackgroundSidebar } = this.props;
    const imageBGList = [1, 2, 3, 4].map((item, i) => (
      <li key={i} className={activeIndexBGSidebar === i ? 'active' : null}>
          <a href="#!" className="img-holder switch-trigger" onClick={setBackgroundSidebar.bind(this, i)}>
            <img src={`./assets/img/sidebar-${item}.jpg`} alt=""/>
          </a>
      </li>
    ));

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
                 {
                   lines.map((line, i) => (
                     <span 
                      key={i} 
                      data-color={line.color} 
                      className={colorActive === i ? `${line.class} active` : line.class}
                      onClick={setActiveColor.bind(this, {
                        index: i,
                        color: line.color
                      })}
                    />
                   ))
                 }
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li className="header-title">Images</li>
            <Fragment> { imageBGList } </Fragment>
            <li className="button-container">
              <a
                href="#!"
                className="btn btn-primary btn-block"
              >
                More Details
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
            <li className="button-container">
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

const mapStateToProps = state => {
  return {
    colorActive: state.commonReducer.colorActive,
    activeIndexBGSidebar: state.commonReducer.activeIndexBGSidebar,
  }
}

const mapDispatchToProps = dispatch => ({
  setActiveColor: (activeColor) => dispatch({type: 'ACTIVE_COLOR', payload: activeColor}),
  setBackgroundSidebar: (activeIndex, e) => dispatch({ type: 'ACTIVE_BACKGROUND_SIDEBAR', payload: activeIndex, e})
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);