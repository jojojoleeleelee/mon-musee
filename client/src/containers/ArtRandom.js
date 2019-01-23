import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Art from '../components/Art';
import { loadRandomArt } from '../actions/artworks'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
class ArtRandom extends React.Component {

  handleRandom = () => {
    this.props.dispatchLoadRandomArt()
  }

  render() {

    return (
      <div className='center-align'>
        <br/>
        <br/>
        <br/>
        <RandomButton className="waves-effect waves-light btn" onClick={this.handleRandom}>Random Art</RandomButton>
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
    art: state.art
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchLoadRandomArt: loadRandomArt
  }, dispatch)
}

export default connect(mapStateToProps, {
  loadRandomArt
})(ArtRandom)

const RandomButton = styled(Button)`
&& { /*don't use !important */
  background: #e1bee7;
  color: white;
  font-size: 15px;
  margin: 3em;
  display:flex-center;
  background: linear-gradient(20deg, #c12c8d 30%, pink 80%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 8px 6px rgba(255, 105, 135, .3);
}
`;