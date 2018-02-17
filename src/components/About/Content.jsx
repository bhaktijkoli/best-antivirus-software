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
                    <h3>About</h3>
                    <p>Lorem ipsum dolor consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                    <p style={{marginTop:'15px'}}>Lorem ipsum dolor consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. </p>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'200px'}}></div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="side-bar">
              <div className="row">
                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> <i><img src="/images/new-post.png" alt="" /></i>About Author</h3>

                    <div className="col-sm-5">
                      <div className="row">
                        <div className="profile-img">
                          <img src="/images/profile-img.png" alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-7">
                      <div className="row">
                        <div className="profile-name">
                          <h4>DAVID PETERSON</h4>
                          <span>Sed dia nonummy</span>
                        </div>
                      </div>
                    </div>
                    <p>Lorem ipsum dolor consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. </p>
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
