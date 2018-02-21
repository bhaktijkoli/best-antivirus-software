import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Banner from './Banner.jsx';
import Content from './Content.jsx';

import Data from './Data.js';

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
    }
  }
  componentDidMount() {
    var url = this.props.match.params.url;
    var data = null;
    Data.forEach((e)=>{
      if(e.url == url) data=e
    });
    this.setState({data:data})
    document.title = data.name;
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
export default BlogDetails;
