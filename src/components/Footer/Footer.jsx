import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
      	<div className="container">
          	<div className="col-sm-6 col-xs-12">
              	<div className="row">
                  	<div className="col-sm-7 col-xs-12">
                      	<div className="row">
                              <div className="map">
                                  <img src="/images/map.png" alt="" />
                                  <div className="virus-logo">
                                  	<img src="/images/anti-virus.png" alt="" />
                                  </div>
                              </div>
                           </div>
                        </div>

                       <div className="col-sm-5 col-xs-12 address-clm">
                       	<h4>ADDRESS</h4>
                          <span>1234 AB Street, Lorem ipsum dolor  consectetuer adipiscing.</span>

                          <div className="email">
                          	<a href="#">support@bestantivirussoftware.info</a>
                          </div>
                       </div>
                  </div>
              </div>

              <div className="col-sm-6 col-xs-12 right-part">
              	<div className="row">
                  	<h4>Need help choosing? Call us at 1-800-564-8245</h4>

                      <ul className="footer-menu">
                      	<li><a href="#">About</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">Disclaimer</a></li>
                          <li><a href="#">Privacy Policy</a></li>
                          <li><a href="#">Terms & Conditions</a></li>
                      </ul>

                      <div className="copyright">
                      	<h4>© 2018 BestAntivirusSoftware.info All Rights Reserved.</h4>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}
export default Footer;
