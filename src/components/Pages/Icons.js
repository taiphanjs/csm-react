import React from "react";
import {useSpring, animated} from 'react-spring';
import { connect } from 'react-redux';

const Icons = ({styleFade}) => {
  return (
    <animated.div style={useSpring(styleFade)} className="container-fluid" >
      <div className="container-fluid">
        <div className="card card-plain">
          <div className="card-header card-header-primary">
            <h4 className="card-title">Material Design Icons</h4>
            <p className="card-category">Handcrafted by our friends from
              <a href="https://design.google.com/icons/">Google</a>
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <div className="iframe-container d-none d-lg-block" style={{height: '700px'}}>
                  <iframe src="https://design.google.com/icons/" style={{height: '100%'}} title="map">
                    &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;
                  </iframe>
                </div>
                <div className="col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto">
                  <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the
                    <a href="https://design.google.com/icons/">Material Icons</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );
  }

  
const mapStateToProps = state => {
  return {
    styleFade: state.commonReducer.styleFade
  }
}
export default connect(mapStateToProps, null)(Icons);
