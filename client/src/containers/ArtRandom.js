import React from 'react';
import { connect } from 'react-redux';

import Art from '../components/Art';
import { loadRandomArt } from '../actions/artworks'

class ArtRandom extends React.Component {

  handleRandom = () => {
    this.props.loadRandomArt()
  }

  render() {

    return (
      <div className='center-align'>
        <br/>
        <br/>
        <br/>
        <button className="waves-effect waves-light btn" onClick={this.handleRandom}>Random Art</button>
        <br />
        <br />
        <br />
        <hr />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    verse: state.verses
  }
}

export default connect(mapStateToProps, {
  loadRandomArt
})(ArtRandom)