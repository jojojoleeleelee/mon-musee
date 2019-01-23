
export const loadArts = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/artworks`, {
      accept: 'application/json',
    })
    .then(res => res.json())
    .then(artworks => dispatch(getArt(artworks)))
  }
}


export function loadArt(id) {
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_ART' });
    return fetch(`http://localhost:3001/artworks/${id}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(artworks => dispatch(getArt(artworks)));
  };
}

const getArt = art => {
  return {
    type: "LOAD_ALL_ART",
    art
  }
}
