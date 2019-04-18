import React, { Component } from "react";
import { connect } from 'react-redux';
import { setActivePage } from '../../store/common/commonActions';

class Typography extends Component {
  componentDidMount() {
    this.props.setActivePage({
      name: 'Typography',
      url: this.props.match.url
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card">
          <div className="card-header card-header-primary">
            <h4 className="card-title">Material Dashboard Heading</h4>
            <p className="card-category">Created using Roboto Font Family</p>
          </div>
          <div className="card-body">
            <div id="typography">
              <div className="card-title">
                <h2>Typography</h2>
              </div>
              <div className="row">
                <div className="tim-typo">
                  <h1>
                    <span className="tim-note">Header 1</span>The Life of Material Dashboard </h1>
                </div>
                <div className="tim-typo">
                  <h2>
                    <span className="tim-note">Header 2</span>The Life of Material Dashboard</h2>
                </div>
                <div className="tim-typo">
                  <h3>
                    <span className="tim-note">Header 3</span>The Life of Material Dashboard</h3>
                </div>
                <div className="tim-typo">
                  <h4>
                    <span className="tim-note">Header 4</span>The Life of Material Dashboard</h4>
                </div>
                <div className="tim-typo">
                  <h5>
                    <span className="tim-note">Header 5</span>The Life of Material Dashboard</h5>
                </div>
                <div className="tim-typo">
                  <h6>
                    <span className="tim-note">Header 6</span>The Life of Material Dashboard</h6>
                </div>
                <div className="tim-typo">
                  <p>
                    <span className="tim-note">Paragraph</span>
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Quote</span>
                  <blockquote className="blockquote">
                    <p>
                      I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
                    </p>
                    <small>
                      Kanye West, Musician
                    </small>
                  </blockquote>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="tim-typo">
                  <span className="tim-note">Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>
                </div>
                <div className="tim-typo">
                  <h2>
                    <span className="tim-note">Small Tag</span>
                    Header with small subtitle
                    <br />
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setActivePage })(Typography);
