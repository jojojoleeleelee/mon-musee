import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="deep-purple lighten-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">&nabla;&spades;&nabla;   M O N - M U S E E</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/artworks/search" exact="true">Search Art</Link></li>
          <li><Link to="/artworks" exact="true">All Art</Link></li>
          <li><Link to="/artworks/random" exact="true">Random Art</Link></li>
          <li><Link to="/artists/search" exact="true">Search Artists</Link></li>
          <li><Link to="/artists" exact="true">All Artists</Link></li>
          <li><Link to="/about" exact="true">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
