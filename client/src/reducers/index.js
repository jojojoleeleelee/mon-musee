import { combineReducers } from 'redux';
import artists from './artists.js'
import artworks from './artworks.js'
export default combineReducers({
  artists: artists,
  artworks: artworks
})
