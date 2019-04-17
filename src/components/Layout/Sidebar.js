import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setActiveTab } from '../../store/common/commonActions';

class Sidebar extends Component {
  
  render() {
    const { menuItems, tabActive, setActiveTab, itemBackground, activeIndexBGSidebar } = this.props;
    return (
      <div className="sidebar" data-color="purple" data-background-color="white">
        <div className="logo">
          <Link to="/" className="simple-text logo-normal">DashBoard</Link>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {
              menuItems.map((item, index) => (
                <li className={tabActive === index ? 'nav-item active' : 'nav-item'} key={index} onClick={setActiveTab.bind(this, index)}>
                  <Link to={item.link} className="nav-link" style={tabActive === index ? {backgroundColor: itemBackground} : null} >
                    <i className="material-icons">{item.icon}</i>
                    <p>{item.title}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="sidebar-background" style={{backgroundImage: `url(./assets/img/sidebar-${activeIndexBGSidebar + 1}.jpg)`}} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    menuItems: state.commonReducer.menuItems,
    tabActive: state.commonReducer.tabActive,
    itemBackground: state.commonReducer.itemBackground,
    activeIndexBGSidebar: state.commonReducer.activeIndexBGSidebar
  }
}

export default connect(mapStateToProps, { setActiveTab })(Sidebar);