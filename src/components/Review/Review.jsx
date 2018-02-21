import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from './Banner.jsx';
import Content from './Content.jsx';

import Data from './Data.js';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    }
  }
  componentDidMount() {
    var app = this.props.match.params.app;
    var data = null;
    Data.forEach((e)=>{
      if(e.url == app) data=e
    });
    this.setState({data:data})
    document.title = "Review of " + data.name;
    $(window).scrollTop(0);
  }
  render() {
    return(
      <div>
        <Banner data={this.state.data}/>
        <main>
          <Content data={this.state.data}/>
        </main>
      </div>
    )
  }
}
export default Review;
