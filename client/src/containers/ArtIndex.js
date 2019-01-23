import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const APIURL = `https://api.artsy.net/api/`

class ArtIndex extends Component {

  static propTypes = {
    artName: PropTypes.string,
    artArtist: PropTypes.string,
    artDate: PropTypes.string
  }

  static defaultProps = {
    artName: '',
    artArtist: '',
    artDate: ''
  }

  componentDidMount() {
   
  }


  render() {
    return (
        <div className="App-intro center-align">
          <h1>HELLO</h1>
        </div>
    )
        
  }
}

export default (ArtIndex);
