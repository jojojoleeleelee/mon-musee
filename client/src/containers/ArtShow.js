import React from 'react';
import { connect } from 'react-redux';
import { loadArt } from '../actions/artworks'

import Art from '../components/Art';

class ArtShow extends React.Component {
  componentDidMount() {
    this.props.loadArt(this.props.match.params.id)
  }

  render() {
    return (
      <div>
      {this.props.art.art !== '' ? <Art key={this.props.art.id} index={this.props.art.id} art={this.props.art} /> : null }
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