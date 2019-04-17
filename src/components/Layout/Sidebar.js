import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          title: 'DashBoard',
          icon: 'dashboard',
          link: ''
        },
        {
          title: 'User Profile',
          icon: 'person',
          link: 'users'
        },
        {
          title: 'Table List',
          icon: 'content_paste',
          link: 'table'
        },
        {
          title: 'Typography',
          icon: 'library_books',
          link: 'typography'
        },
        {
          title: 'Icons',
          icon: 'bubble_chart',
          link: 'icons'
        },
        {
          title: 'Maps',
          icon: 'location_ons',
          link: 'maps'
        },
        {
          title: 'Notifications',
          icon: 'notifications',
          link: 'notifications'
        },
        {
          title: 'RTL Support',
          icon: 'language',
          link: 'supports'
        },
        {
          title: 'Upgrade to PRO',
          icon: 'unarchive',
          link: 'upgrade'
        }
      ],
      activetab: 0
    };
  }

  menuActive(i) {
    console.log(i);
  }
  render() {
    const { menuItems, activetab } = this.state;
    return (
      <div
        className="sidebar"
        data-color="purple"
        data-background-color="white"
        data-image="../assets/img/sidebar-1.jpg"
      >
        <div className="logo">
          <Link
            to="/"
            className="simple-text logo-normal"
          >
            Creative Tim
          </Link>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {
              menuItems.map((item, index) => (
                <li className={ activetab === index ? 'nav-item active' : 'nav-item'} key={index} onClick={() => this.menuActive(index)} >
                  <Link className="nav-link" to={item.link}>
                    <i className="material-icons">{item.icon}</i>
                    <p onClick={this.menuActive(activetab)}>{item.title}</p>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;