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
                    <p>Brian Johnstone worked as a Security Analysis for Trend Micro from 2006-2016, specializing in analyzing the newest threats that entered cyberspace. After Brian retired in 2016, he decided to form the BestAntiVirusSoftware. BestAntivirusSoftware focuses on being an unbiased, critical source for people looking to increase their security on the internet.</p>
                    <p style={{marginTop:'25px'}}>John Baker worked as a Chief Security Officer for multiple start-ups throughout his career. He focused on analyzing and fixing security threats that could make or break a start-up. In his spare time, he likes to rock climb and write as a guest writer for American Software Society.</p>
                    <p style={{marginTop:'25px'}}>Ryan Halden brings over a decade of IT security news reporting to BestAntivirusSoftware. Prior to joining American Software Society, he worked as an editor for the Information Security magazine where he developed his skill in writing. Now that Ryan works for American Software Society he covers the critical security issues and cybercrime affecting business and consumers today, and in his free time he writes for BestAntivirusSoftware to help people around the world stay safe on the internet.</p>
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
