import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from '../lamp-logo.png'

class Home extends React.Component {

  render(){
    return (
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
        <br />

          <Link to="/">
            <span>

            <h1 className="brown-text text-lighten-3">M O N &spades; M U S E E </h1>

              <br />
              <br /><br />
              <br /><br />
              <br /><br />
            </span>
          </Link>
        </div>
      </div>
    )
  }
}
// <img src={logo} alt="lamp-logo" height="300" className="blink_me"/><br /><br />

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}



export default connect(mapStateToProps)(Home)
