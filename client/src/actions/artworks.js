
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

export function loadRandomArt() {
  const randomNum = Math.floor(Math.random() * Math.floor(250)) + 1
  return (dispatch) => {
    dispatch({ type: 'START_LOADING_VERSE' });
    return fetch(`http://localhost:3001/art/${randomNum}`, {
      accept: 'application/json',
    }).then(response => response.json())
      .then(art => dispatch(getArts(art)));
  };
}

const getArts = arts => {
  return {
    type: "LOAD_ALL_VERSES",
    arts
  }
}