import React, { Component } from 'react';
import { setActivePage } from '../../store/common/commonActions';
import { connect } from 'react-redux';

class Maps extends Component {
  componentDidMount() {
    this.props.setActivePage({
      name: 'Maps',
      url: this.props.match.url
    });
  }
  render() {
    return (
      <div className="container-fluid">
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.1379861266546!2d140.39066141449052!3d35.771986680173185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022f379d1bd3757%3A0xd56e29a162771aa1!2zU8OibiBiYXkgcXXhu5FjIHThur8gTmFyaXRh!5e0!3m2!1svi!2s!4v1555569059707!5m2!1svi!2s" frameBorder="0" style={mapStyles} allowFullScreen title="Google Map" />
          </div>
      </div>
    )
  }
}

const mapStyles = {
  width: '100%',
  height: 'calc(100% + 70px)',
  marginTop: '-70px'
}

export default connect(null, { setActivePage })(Maps);
