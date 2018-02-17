import React, { Component } from 'react';


import Header from './Header/Header.jsx';
import Banner from './Banner/Banner.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <main>
          <Banner />
          <Main />
        </main>
        <Footer />
      </div>
    )
  }
}
export default App;
