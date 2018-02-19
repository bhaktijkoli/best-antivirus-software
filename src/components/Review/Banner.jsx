import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <section className="banner" style={{height:'290px'}}>
        <div className="container">
          <div className="banner-content">
            <h1>Review of {this.props.data.name}</h1>
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
