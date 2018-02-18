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
                    <h3>Disclaimer</h3>
                    <p>This website is a free online resource to help you make an informed decision when choosing an antivirus software. We receive advertising compensation from many of the antivirus programs featured on this site. The compensation received impacts the location in which companies are listed and in some cases impact the scores to aid this. The scoring on this website is determined by BestAntivirusSoftware in its sole discretion.</p>
                    <p style={{marginTop:'25px'}}>The content, scores, ratings, trends and reviews expressed on this site are the sole discretion of BestAntivirusSoftware.info. The information is strictly for research and informational purposes only. We do our best to keep all information up to date and accurate but cannot guarantee it. In order to keep this information service free, BestAntivirusSoftware.info receives monetary compensation from some of the companies featured on this website.</p>
                    <p style={{marginTop:'25px'}}>This website is a buyer’s guide and not considered as advice. BestAntivirusSoftware.info receives monetary compensation from companies listed to showcase their products. There may be incorrect or inaccurate Information that appears on this however, the webmasters do their best to verify data and maintain accuracy, but no warranty is expressed or given to the users.</p>
                    <p style={{marginTop:'25px'}}>BestAntivirusSoftware.info and its subsidiaries, affiliates, staff, nor any person connected with the development or the maintaining of this website shall be in any way accountable or liable to any degree for any indirect, direct, special, 3rd party or consequential losses, damages or expenses that may arise from using this website. We will not be responsible for any detrimental reliance that you may place upon the site or its contents.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3>Confidentiality and Security</h3>
                    <p>You, the user of this website herby acknowledge and agree that BestAntivirusSoftware.info and its partners or affiliates cannot be held liable for damages that may occur as a result of your confidential information being transmitted to or from this website over the internet and that all communications are deemed at your own risk.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3>Contacting us</h3>
                    <p>If you have any questions, please contact us at: support@BestAntivirusSoftware.info</p>
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
