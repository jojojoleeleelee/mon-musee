import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from '../lamp-logo.png'

class About extends React.Component {

  render(){
    return (
      <div>
        <div className="center-align">
        <br />
        <br />
          <Link to="/verses">
            <span>
            <h3><strong>M O N &spades; M U S E E</strong></h3>
            <br />
            <br />
            <br />
              <h5><strong>Search and learn about artwork and artists of your choice! </strong></h5>
              <br />
              <br /><br />
              <br /><br />
              <h5>&spades; Powered by Artsy &trade;&spades;</h5>

              <br /><br />
              <br /><br />
            </span>
          </Link>
        </div>
      </div>
    )
  }
}

// <img src={logo} alt="lamp-logo" height="300" />

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}



export default connect(mapStateToProps)(About)
