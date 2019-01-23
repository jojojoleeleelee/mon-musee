import React, { Component } from 'react';

const APIURL = `https://api.artsy.net/api/${process.env.ARTSY_SECRET_KEY}/`

class ArtIndex extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }


  render() {
    return (
        <div className="App-intro">
          <h1>HELLO</h1>
        </div>
    )
        
  }
}

export default (ArtIndex);
