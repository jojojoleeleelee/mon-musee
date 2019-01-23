import React from 'react';
import { connect } from 'react-redux'

const Art = (art) => {
  return (
    <div className="card">
      <div className="card card-panel blue lighten-4">
        <div className="card-content white-text center-align">
          <h4>{art.art.book} - {art.art.chapter}</h4>
          <h3><strong>{art.art.text}</strong></h3>
          <br />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(Art)