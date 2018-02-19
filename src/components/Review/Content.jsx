import React, { Component } from 'react';

import Feature from './Feature.jsx'

class Content extends Component {
  render() {
    if(!this.props.data.features) {
      return(<div>Loading....</div>)
    }
    var no = 0;
    const list = this.props.data.features.map((data) =>
    <Feature key={no++} data={data} />
  );
  return(
    <section className="content-part">
      <div className="container">
        <div className="col-sm-9" style={{paddingRight:'50px'}}>
          <div className="row">
            <form className="search-form">
              <div className="col-md-4 col-sm-12">
                <div className="ra text-center">
                  <img src={this.props.data.image} alt="" />
                </div></div>
                <div className="col-md-4 col-sm-12">
                  <div className="ra text-center">
                    <h3> Overall Rating</h3></div>
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                    </div>

                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="ro text-center">
                      <h3> Overall Rating</h3></div>
                      <div className="text-center">
                        <img src="/images/rat-96.png" alt="" /></div>
                      </div>
                    </form>


                    <div className="software-clm description" id="sec-d">
                      <p>{this.props.data.description}</p>

                      <div className="pols">
                        <div className="row po">
                          <div className="col-md-3 col-sm-12"><h3>Features</h3></div>
                          <div className="col-md-8 col-sm-12"><img src="/images/pol.png" style={{width:'100%'}} /></div>
                          <div className="col-md-1 col-sm-12"><h3></h3>5</div>
                        </div>
                        <div className="row po">
                          <div className="col-md-3 col-sm-12"><h3>Value for money</h3></div>
                          <div className="col-md-8 col-sm-12"><img src="/images/pol.png" style={{width:'100%'}} /></div>
                          <div className="col-md-1 col-sm-12"><h3></h3>5</div>
                        </div>
                        <div className="row po">
                          <div className="col-md-3 col-sm-12"><h3>Support</h3></div>
                          <div className="col-md-8 col-sm-12"><img src="/images/pol.png" style={{width:'100%'}} /></div>
                          <div className="col-md-1 col-sm-12"><h3></h3>5</div>
                        </div>
                        <div className="row po">
                          <div className="col-md-3 col-sm-12"><h3>Ease of use</h3></div>
                          <div className="col-md-8 col-sm-12"><img src="/images/pol.png" style={{width:'100%'}} /></div>
                          <div className="col-md-1 col-sm-12"><h3></h3>5</div>
                        </div>


                      </div>
                      <div className="bott"><a href={this.props.data.web} className="btn visit-btn" style={{color:'white'}}>VISIT WEBSITE</a></div>


                    </div>

                    <div className="software-clm">
                      {list}
                    </div>
                    <div className="software-clm">
                      <div className="title mm">
                        <h2>Reviews</h2>
                      </div>
                      <div className="ranti row">
                        <div className="col-md-2 col-sm-12 text-center"><img src="/images/tes-1.png" /></div>
                        <div className="col-md-10 col-sm-12"><h3 style={{float:'left'}}>Emma Jolie</h3><div className="rating-icons" style={{margin:'0px'}}>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                        </div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p></div>
                      </div>
                      <div className="ranti row">
                        <div className="col-md-2 col-sm-12 col-md-offset-1 text-center"><img src="/images/tes-2.png"/></div>
                        <div className="col-md-7 col-sm-12 "><h3 style={{float:'left'}}>Maria Jen</h3><div className="rating-icons" style={{margin:'0px'}}>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                        </div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p></div>
                      </div>
                      <hr />
                      <div className="ranti row">
                        <div className="col-md-2 col-sm-12 text-center"><img src="/images/tes-3.png"/></div>
                        <div className="col-md-10 col-sm-12"><h3 style={{float:'left'}}>James Kingston</h3><div className="rating-icons" style={{margin:'0px'}}>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                        </div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p></div>
                      </div>
                      <hr />
                      <div className="title mm">
                        <h2>Write Review</h2>
                      </div>
                      <div className="frm">
                        <div className="half">
                          <input type="text" name="" className="fom" placeholder="Name" style={{marginLeft:'14px'}}/>
                        </div>

                        <div className="half">
                          <input type="text" name="" className="fom" placeholder="Email Address" />
                        </div>

                        <div className="raj"><h3 style={{float:'left'}}>Over all rating</h3><div className="rating-icons" style={{margin:'0px'}}>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                          <i className="icon ion-android-star"></i>
                        </div>


                        <textarea  name="" className="jom" placeholder="Your Comment" style={{width:'98%'}}></textarea></div>
                        <div className="bott" style={{marginLeft:'9px', marginBottom:'26px'}}>
                          <button type="button bott" className="btn visit-btn">VISIT WEBSITE</button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar Start */}
                  <div className="col-sm-3">
                    <div className="row">
                      <div className="side-bar">
                        <div className="side-bar-clm">
                          <div className="inner-content">
                            <h3> <i><img src="/images/anti-virus.png" alt="" /></i>Top 5 Best Antivirus 2018</h3>
                            <div className="col-sm-12">
                              <div className="row">
                                <div className="profile-img ww">
                                  <h3>#1</h3> <img src="/images/totalav.png" className="ww3"/>
                                  <hr />
                                </div>
                              </div>
                              <div className="row">
                                <div className="profile-img ww">
                                  <h3>#2</h3> <img src="/images/scan-gaurd.png" className="ww3"/>
                                  <hr />
                                </div>
                              </div>
                              <div className="row">
                                <div className="profile-img ww">
                                  <h3>#3</h3> <img src="/images/malware-pro.png" className="ww3"/>
                                  <hr />
                                </div>
                              </div>
                              <div className="row">
                                <div className="profile-img ww">
                                  <h3>#4</h3> <img src="/images/mac-afee.png" className="ww3"/>
                                  <hr />
                                </div>
                              </div>
                              <div className="row">
                                <div className="profile-img ww">
                                  <h3>#5</h3> <img src="/images/norton.png" className="ww3"/>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="side-bar-clm">
                        <div className="inner-content">
                          <h3> <i><img src="/images/arrow.png" alt=""/></i>What include</h3>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>VPN Access</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Safe Browsing</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Email Protection</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Windows Compatibility</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Mac Compatibility</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Android Compatibility</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>iOS Compatibility</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Spyware</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Trojans</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Worms</h3>
                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Rootkits</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Auto Scanning</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Scheduled Scan</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Firewall Protection</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>File Manager</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>System Booster</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Phone Support</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Email Support</h3>

                          </div>
                          <div className="ff">
                            <img src="/images/Screenshot_1.png"/><h3>Ticket Support</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sidebar End */}
                </div>
              </section>
            )
          }
          componentDidMount() {
          }
        }
        export default Content;
