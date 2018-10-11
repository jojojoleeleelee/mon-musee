import React from 'react';
export const Footer = () => {

  return (
    <footer className="page-footer indigo lighten-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">M O N &spades; M U S E E</h5>
            <p className="grey-text text-lighten-4">Your Virtual Museum</p>
            <p className="grey-text left-align text-lighten-4">Mon Musee, french for 'My Museum,' enables you to seek and find works of art at your fingertips. Learn more about classic artworks and obscure gems alike at your convenience!</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="/verses">All Artwork</a></li>
              <li><a className="grey-text text-lighten-3" href='/myverses'>Search Artwork</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">Random Artwork</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">Search Artist</a></li>
              <li><a className="grey-text text-lighten-3" href="/verses/random">All Artist</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2018 Copyright Joanne Lee
        <a className="grey-text text-lighten-4 right" href="/about">About</a>
        </div>
      </div>
    </footer>
  )
}
