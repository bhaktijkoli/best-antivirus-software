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
                    <p>Lorem ipsum dolor  consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                    <p style={{marginTop:'15px'}}>Lorem ipsum dolor consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. </p>
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
