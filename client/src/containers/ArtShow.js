import React from 'react';
import { connect } from 'react-redux';
import { loadArt } from '../actions/artworks'

import Art from '../components/Art';

class ArtShow extends React.Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
      <h1>Individual Art</h1>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    art: state.arts
  }
}

export default connect(mapStateToProps, {
  loadArt
})(ArtShow)