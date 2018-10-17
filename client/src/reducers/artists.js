export default (
  state = [], action) => {

  switch(action.type){
    case "START_LOADING_ARTIST":
      return Object.assign({}, state, {loading: true})
    case "LOAD_ARTIST":
      return action.artist
    case "LOAD_ALL_ARTISTS":
      return action.artists
    default:
      return state
  }
}
