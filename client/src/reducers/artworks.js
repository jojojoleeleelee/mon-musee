export default (
  state = [], action) => {

  switch(action.type){
    case "START_LOADING_ARTWORK":
      return Object.assign({}, state, {loading: true})
    case "LOAD_ARTWORK":
      return action.artwork
    case "LOAD_ALL_ARTWORKS":
      return action.artworks
    default:
      return state
  }
}
