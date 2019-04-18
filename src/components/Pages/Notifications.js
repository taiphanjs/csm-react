import React, { Component } from "react";
import { connect } from 'react-redux';
import { setActivePage } from '../../store/common/commonActions';

class Notifications extends Component {
  componentDidMount() {
    this.props.setActivePage({
      name: 'Notifications',
      url: this.props.match.url
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-header card-header-primary">
            <h3 className="card-title">Notifications</h3>
            <p className="card-category">Handcrafted by our friend
              <a href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the
              <a href="http://bootstrap-notify.remabledesigns.com/">full documentation.</a>
            </p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h4 className="card-title">Notifications Style</h4>
                <div className="alert alert-info">
                  <span>This is a plain notification</span>
                </div>
                <div className="alert alert-info">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>This is a notification with close button.</span>
                </div>
                <div className="alert alert-info alert-with-icon" data-notify="container">
                  <i className="material-icons" data-notify="icon">add_alert</i>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span data-notify="message">This is a notification with close button and icon.</span>
                </div>
                <div className="alert alert-info alert-with-icon" data-notify="container">
                  <i className="material-icons" data-notify="icon">add_alert</i>
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                </div>
              </div>
              <div className="col-md-6">
                <h4 className="card-title">Notification states</h4>
                <div className="alert alert-info">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Info - </b> This is a regular notification made with ".alert-info"</span>
                </div>
                <div className="alert alert-success">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Success - </b> This is a regular notification made with ".alert-success"</span>
                </div>
                <div className="alert alert-warning">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                </div>
                <div className="alert alert-danger">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
                </div>
                <div className="alert alert-primary">
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <i className="material-icons">close</i>
                  </button>
                  <span>
                    <b> Primary - </b> This is a regular notification made with ".alert-primary"</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="places-buttons">
              <div className="row">
                <div className="col-md-6 ml-auto mr-auto text-center">
                  <h4 className="card-title">
                    Notifications Places
                    <p className="category">Click to view notifications</p>
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                  <div className="row">
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block" >Top Left</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block">Top Center</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block">Top Right</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-10 ml-auto mr-auto">
                  <div className="row">
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block">Bottom Left</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block">Bottom Center</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-block">Bottom Right</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null, { setActivePage })(Notifications);
