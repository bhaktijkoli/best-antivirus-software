import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return(
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <h1>TOP 10 BEST ANTIVIRUS PROGRAMS OF 2018 </h1>

            <div className="full-width name-nd-date">
              <span className="name">DAVID PETERSON</span>
              <span className="date">February 10, 2018</span>
            </div>

            <div className="social-icons">
              <div className="share-heading">
                <span>Share:</span>
                <span>57</span>
              </div>

              <a href="#" className="fb" style={{marginRight:'10px'}}><i className="fa fa-facebook"></i> 27</a>
              <a href="#" className="twt" style={{marginRight:'10px'}}><i className="fa fa-twitter"></i> 13</a>
              <a href="#" className="g-plus" style={{marginRight:'10px'}}><i className="fa fa-google-plus"></i> 9</a>
              <a href="#" className="pint" style={{marginRight:'10px'}}><i className="fa fa-pinterest"></i> 4</a>
              <a href="#" className="linkdin" style={{marginRight:'10px'}}><i className="fa fa-linkedin"></i> 2</a>
              <a href="#" className="last-one" style={{marginRight:'10px'}}><i className="fa fa-stumbleupon"></i> 2</a>
            </div>

            <p>It is a challenging task to find the best antivirus when there are so many to choose from with different features! Here at Best AntiVirus our top priority is to make sure we help consumers get past the smoke screen and give you the resources to find the best antivirus on the market. The best way to find the best antivirus for you is by doing a comparison. On our website we allow you to compare all the top anti-viruses, giving you the informed decision to buy the best antivirus. </p>
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
