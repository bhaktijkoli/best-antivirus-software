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
                    <h3>Contact</h3>
                    <p>If you would like to get in touch with us to let us know your thoughts about our website, or to give some additional feedback on our featured Anti Virus providers, please use the form below. We look forward to hearing from you.</p>
                    <div className="space" style={{marginTop:'20px'}}></div>
                    <div className="frm">
                      <div className="half">
                        <input type="text" name="" className="fom" placeholder="Name" />
                      </div>
                      <div className="half">
                        <input type="text" name="" className="fom" placeholder="Email Address" />
                      </div>
                      <textarea  name="" className="jom" placeholder="Your Message"></textarea></div>
                      <div className="bott" style={{marginLeft:'9px', marginBottom:'26px'}}>
                        <button type="button bott" className="btn visit-btn">SEND MESSAGE</button>
                      </div>
                      <p>Alternatively, you can contact us directly via support@bestantivirussoftware.info</p>
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
                      <button type="button" className="btn choose-btn">Choose an Antivirus</button>
                    </div>
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
