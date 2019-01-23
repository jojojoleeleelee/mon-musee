import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import Home from './containers/Home'
import ArtIndex from './containers/ArtIndex'
import ArtShow from './containers/ArtShow'
import About from './containers/About'

class App extends Component {
  render() {
    return (
      <div className="grey-text text-lighten-2">
      <Router>
     <div>
       <Navbar />
         <div className="col s-12">
         <Switch>
           <Route exact path ="/" component={Home} />
           <Route exact path ="/art" component={ArtIndex} />
           <Route exact path ="/art/:id" component={Home} />
           <Route exact path='/about' component={About} />
         </Switch>
         </div>
         <Footer />
       </div>
   </Router>
      </div>
    );
  }
}

export default App;
