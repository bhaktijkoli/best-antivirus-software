import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import Footer from './Footer/Footer.jsx';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
            <Route exact path="/" component={Home}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
