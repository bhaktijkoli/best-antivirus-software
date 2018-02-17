import React, { Component } from 'react';

class Content extends Component {
  render() {
    return(
      <section className="content-part">
        <div className="container">
          <div className="col-sm-9 padd-r-15">
            <div className="side-bar">
              <div className="row">
                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3>BestAntivirusSoftware Privacy Policy</h3>
                    <p>BestAntivirusSoftware web servers recognize a visitors domain name, no email addresses are stored. We do collect the domain names of visitors to our site but do not store any email addresses, nor do we store a visitors unique information on which pages consumers access or visit on our website, nor do we use information submitted by the visitor such as our contact form submission or questionnaire results. Any information we obtain is used for a review or discarded. All information obtained is used to enhance user experience and helps us give broad reviews of our partners products.</p>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'50px'}}>
                <div className="search-form side-bar-clm">
                  <div className="inner-content">
                    <h3>Our Policy On Cookies</h3>
                    <p>
                      BestAntivirusSoftware.info uses the latest and most powerful website encryption technology when receiving and transferring consumer data exchanged with our website. If you do not believe that our website is not abiding by the guidelines set out forthwith please don’t hesitate to contact us via our contact form or at support@BestAntivirusSoftware.info
                    </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'50px'}}>
                <div className="search-form side-bar-clm">
                  <div className="inner-content">
                    <h3>BestAntivirusSoftware Security</h3>
                    <p style={{marginBottom:'40px'}}>
                      Cookies are small text files stored on your computer by your browser, BestAntivirusSoftware.info use cookies to make sure our website visitors don’t see the same information time and again. Cookies contain information about how you use your computer but don’t include any personal information about you. Any changes to our cookie policy will subsequently be posted here. By accessing our website you agree that our cookie policy will apply whenever you access our website.
                    </p>
                    <p>
                      At any point, you have the right to contact BestAntivirusSoftware.info if you feel that the site is not complying with its own privacy terms, please get in touch via our contact form. Alternatively, you can contact us directly via support@BestAntivirusSoftware.info
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3 padd-r-15">
            <div className="side-bar">
              <div className="row">
                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> <i><img src="/images/arrow.png" alt="" /></i>Comparison Table</h3>
                    <p>Lorem ipsum dolor  consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                  </div>
                  <button type="button" className="btn choose-btn">Compare Antivirus</button>
                </div>
              </div>
              <div className="row">
                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> <i><img src="/images/shield-icon.png" alt="" /></i>Select a Provider</h3>
                    <p>Lorem ipsum dolor  consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                  </div>
                  <button type="button" className="btn choose-btn">Choose an Antivirus</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Content;
