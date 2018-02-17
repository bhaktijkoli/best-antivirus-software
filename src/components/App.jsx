import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header.jsx';
import Home from './Home/Home.jsx';
import Review from './Review/Review.jsx';
import About from './About/About.jsx';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy.jsx';
import Footer from './Footer/Footer.jsx';

class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
            <Route exact path="/" component={Home}/>
            <Route exact path="/review" component={Review}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
