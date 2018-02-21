import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <section className="banner" style={{height:'290px'}}>
        <div className="container">
          <div className="banner-content">
            <h1>Blog</h1>
          </div>

          <div className="shield">
            <img src="/images/shield.png" alt="" />
          </div>
        </div>
      </section>
    )
  }
}
export default Banner;
