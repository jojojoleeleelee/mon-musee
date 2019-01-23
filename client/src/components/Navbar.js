import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <nav className="deep-purple lighten-3">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">&nabla;&spades;&nabla;   M O N - M U S E E</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/art/search" exact="true">Search &spades;rt</Link></li>
          <li><Link to="/art" exact="true">&spades;ll &spades;rt</Link></li>
          <li><Link to="/art/random" exact="true">Random &spades;rt</Link></li>
          <li><Link to="/artists/search" exact="true">Search &spades;rtists</Link></li>
          <li><Link to="/artists" exact="true">&spades;ll &spades;rtists</Link></li>
          <li><Link to="/about" exact="true">&spades;bout</Link></li>
        </ul>
      </div>
    </nav>
  )
}
