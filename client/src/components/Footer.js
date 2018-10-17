import React from 'react';
export const Footer = () => {

  return (
    <footer className="page-footer indigo lighten-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">M O N &spades; M U S E E</h5>
            <p className="grey-text text-lighten-4">&spades; Your Virtual Museum &spades;</p>
            <p className="grey-text left-align text-lighten-4">Mon Musee, french for 'My Museum,' enables you to seek and find works of art at your fingertips. Learn more about classic artworks and obscure gems alike at your convenience!</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">&spades; Links &spades;</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="/verses">&spades; All Artwork</a></li>
              <li><a className="grey-text text-lighten-3" href='/myverses'>&spades; Search Artwork</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">&spades; Random Artwork</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">&spades; Search Artist</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">&spades; All Artist</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        &spades; © 2018 Copyright Joanne Lee &spades;
        <a className="grey-text text-lighten-4 right" href="/about">&spades; About &spades;</a>
        </div>
      </div>
    </footer>
  )
}
