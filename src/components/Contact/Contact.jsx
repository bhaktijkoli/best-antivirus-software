import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from './Banner.jsx';
import Content from './Content.jsx';

class Contact extends Component {
  componentDidMount() {
    document.title = "Contact";
    $(window).scrollTop(0);
  }
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
export default Contact;
