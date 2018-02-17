import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Banner from './Banner/Banner.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Banner />
          <main>
            <Route exact path="/" component={Main}/>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
