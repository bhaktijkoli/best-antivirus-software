import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from './Banner.jsx';
import Content from './Content.jsx';

class Home extends Component {
  render() {
    return(
      <div>
        <Banner/>
        <main>
          <Content/>
        </main>
      </div>
    )
  }
}
export default Home;
