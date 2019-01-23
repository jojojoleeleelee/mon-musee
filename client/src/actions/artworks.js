
import axios from 'axios';

const APIURL = `https://api.artsy.net/api/`
const headers = { 'Content-Type': 'application/json' };

export const LOAD_ART = 'LOAD_ART'
export const ART_FETCH_FAILURE = 'ART_FETCH_FAILURE'

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

export const loadRandomArt = () => async (dispatch) => {
  try {
    const randomArt = APIURL + 'rene-magritte'

    const res = await axios(`${APIURL}/rene-magritte`, {
      method: 'GET',
      headers
    });
    dispatch({ type: LOAD_ART, payload: res });

    return res;
  } catch (err) {
    console.log(err);
    dispatch({ type: ART_FETCH_FAILURE, payload: err });
    return err;
  }  
};


const getArts = arts => {
  return {
    type: "LOAD_ALL_ARTS",
    arts
  }
}