import React, { Component } from 'react';

class Content extends Component {
  render() {
    return(
      <section className="content-part">
        <div className="container">
          <div className="col-md-9 col-sm-12 col-xs-12 padd-r-15">
            <div className="row">
              <form className="search-form">
                <h3>Find The One Right For You</h3>

                <div className="form-group">
                  <div className="col-sm-3 col-xs-12 padd-l-0">
                    <div className="col-sm-5">
                      <div className="row">
                        <label>DISPLAY</label>
                      </div>
                    </div>

                    <div className="col-sm-7">
                      <div className="row">
                        <div className="select-field">
                          <select className="selectpicker form-control">
                            <option>All</option>
                            <option>All</option>
                            <option>All</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3 col-xs-12 padd-r-0">
                    <div className="col-sm-5">
                      <div className="row">
                        <label>PRICE</label>
                      </div>
                    </div>

                    <div className="col-sm-7">
                      <div className="row">
                        <div className="select-field">
                          <select className="selectpicker form-control">
                            <option>Any</option>
                            <option>Any</option>
                            <option>Any</option>
                            <option>Any</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-sm-3 col-xs-12 padd-r-0">
                    <div className="col-sm-5">
                      <div className="row">
                        <label>PURPOSE</label>
                      </div>
                    </div>

                    <div className="col-sm-7">
                      <div className="row">
                        <div className="select-field">
                          <select className="selectpicker form-control">
                            <option>All</option>
                            <option>All</option>
                            <option>All</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-sm-3 col-xs-12 padd-r-0">
                    <button type="button" className="btn search-btn"><i className="icon ion-ios-search"></i> <span>SEARCH</span></button>
                  </div>
                </div>
              </form>

              <div className="software-clm">
                <div className="number">1</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/green-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/anti-virus-logo.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox1" type="checkbox" />
                      <label htmlFor="checkbox1">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Voted Best Antivirus 2018. Removes all Viruses, Malware, Spyware, & Adware. </p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$19.95</span>
                        <span className="percentage">96%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">2</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/arrow-sign.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/scan-gaurd.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox2" type="checkbox" />
                      <label htmlFor="checkbox2">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Protects Againest All Malware, Viruses & Adware. Includes PC Cleaner & Optimizer </p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$24.95</span>
                        <span className="percentage">92%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">3</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/green-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/malware-pro.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star-half"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Fantastic value for money! Very slick setup and easy to use. </p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$24.95</span>
                        <span className="percentage">90%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="software-clm">
                <div className="number">4</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/orange-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/mac-afee.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Mcafee is a good quality Antivirus software, slightly expensive.</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$79.99</span>
                        <span className="percentage">88%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">5</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/orange-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/norton.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Plenty of features to choose from, Norton are a trusted brand. Can be slow.</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$39.99</span>
                        <span className="percentage">87%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">6</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/arrow-sign.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/bull-guard.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star-half"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Good engine, Quite expensive considering the amount of features.</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$27.98</span>
                        <span className="percentage">84%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">7</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/arrow-sign.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/sky-remover.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star-half"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Spy Remover Pro is one of the industry leaders in Adwar</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$39.99</span>
                        <span className="percentage">83%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">8</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/green-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/pondo-antivirus.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star-half"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Panda Anti-Virus Pro is a reputable award winning cyber security company</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$59.95</span>
                        <span className="percentage">82%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">9</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/orange-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/avira.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star grey-star"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>At the time of writing this article, Avira has 564 Million installs Worldwide!</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$37.59</span>
                        <span className="percentage">78%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="software-clm">
                <div className="number">10</div>
                <div className="col-sm-5 col-xs-12">
                  <div className="col-sm-3">
                    <i className="green-arrow"><img src="/images/green-arrow.png" alt="" /></i>
                  </div>

                  <div className="col-sm-9 right-border logo-clm">
                    <img src="/images/trend.png" alt="" />
                    <div className="rating-icons">
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star"></i>
                      <i className="icon ion-android-star grey-star"></i>
                      <i className="icon ion-android-star grey-star"></i>
                    </div>

                    <div className="checkbox">
                      <input id="checkbox3" type="checkbox" />
                      <label htmlFor="checkbox3">
                        COMPARE
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-sm-7 col-xs-12">
                  <div className="row">
                    <div className="col-sm-7 col-xs-12 description">
                      <p>Middle of the road antivirus, not overly expensive but not feature packed.</p>

                      <a href="#">READ REVIEW</a>
                    </div>


                    <div className="col-sm-5 col-xs-12 description">
                      <div className="software-price">
                        <span className="price">$41.97</span>
                        <span className="percentage">78%</span>
                      </div>

                      <button type="button" className="btn visit-btn">VISIT WEBSITE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-12 col-xs-12">
            <div className="row">
              <div className="side-bar">
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

                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> <i><img src="/images/shield-icon.png" alt="" /></i>Select a Provider</h3>

                    <p>Lorem ipsum dolor  consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                  </div>
                  <button type="button" className="btn choose-btn">Choose an Antivirus</button>
                </div>

                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> <i><img src="/images/sound.png" alt="" /></i>Advertising Disclosure </h3>

                    <p>Lorem ipsum dolor  consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                  </div>
                </div>

                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> <i><img src="/images/arrow.png" alt="" /></i>Comparison Table</h3>

                    <p>Lorem ipsum dolor  consectetuer adipiscing elit, sed dia nonummy nibh euismod tincidunt ut laoreet dolore magna alique volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl.</p>
                  </div>
                  <button type="button" className="btn choose-btn">Compare Antivirus</button>
                </div>


                <div className="side-bar-clm dark-bg">
                  <div className="inner-content">
                    <h3> <i><img src="/images/anti-virus.png" alt="" /></i>The Top 10 AntiVirus</h3>

                    <p>Sed diam nonummy nib euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wi enim ad minim veniam, quis nos exerci tation ullamcorper suscip lobortis nisl ut aliquip ex consequat. </p>
                  </div>
                </div>

                <div className="side-bar-clm">
                  <div className="inner-content">
                    <h3> Sign Up To Newsletter</h3>

                    <form className="newsletter-form">
                      <input type="email" name="" value="" placeholder="Enter yoaur email" className="form-control" />
                      <input type="submit" value="SIGN UP" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="must-read">
          <div className="container">
            <div className="title">
              <h2>Must Reads</h2>
            </div>

            <div className="col-sm-3 col-xs-12 padd-l-0">
              <div className="img-clm">
                <img src="/images/1.jpg" alt="" />

                <div className="content-img">
                  <span>Best Antivirus Software</span>
                  <h3>Ut wi enim ad mini veniam, quis nos exerci tation.</h3>
                </div>
              </div>

              <div className="description-img">
                <p>Lorem ipsum dolor  consect adipiscing elit, sed dia nonummy nib tincidunt ut laoreet dolore magna volutpat.</p>
              </div>
            </div>

            <div className="col-sm-3 col-xs-12">
              <div className="img-clm">
                <img src="/images/2.jpg" alt="" />

                <div className="content-img">
                  <span>Best Antivirus Software</span>
                  <h3>Ut wi enim ad mini veniam, quis nos exerci tation.</h3>
                </div>
              </div>

              <div className="description-img">
                <p>Lorem ipsum dolor  consect adipiscing elit, sed dia nonummy nib tincidunt ut laoreet dolore magna volutpat.</p>
              </div>
            </div>

            <div className="col-sm-3 col-xs-12">
              <div className="img-clm">
                <img src="/images/3.jpg" alt="" />

                <div className="content-img">
                  <span>Best Antivirus Software</span>
                  <h3>Ut wi enim ad mini veniam, quis nos exerci tation.</h3>
                </div>
              </div>

              <div className="description-img">
                <p>Lorem ipsum dolor  consect adipiscing elit, sed dia nonummy nib tincidunt ut laoreet dolore magna volutpat.</p>
              </div>
            </div>

            <div className="col-sm-3 col-xs-12 padd-r-0">
              <div className="img-clm">
                <img src="/images/4.jpg" alt="" />

                <div className="content-img">
                  <span>Best Antivirus Software</span>
                  <h3>Ut wi enim ad mini veniam, quis nos exerci tation.</h3>
                </div>
              </div>

              <div className="description-img">
                <p>Lorem ipsum dolor  consect adipiscing elit, sed dia nonummy nib tincidunt ut laoreet dolore magna volutpat.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="choose-section">
          <div className="container">
            <div className="title">
              <h2>How to Choose the Best Antivirus Software</h2>
            </div>

            <p>There are many things to consider when choosing your antivirus provider. We have compiled a number of fact filled articles detailed around the antivirus to help you make the right decision. Stay up to date with all the latest Antivirus news.</p>



            <div className="panel-group accordian software-accourdian" id="accordion2">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse11">Best Antivirus 2017 Revealed <i className="fa fa-plus" style={{float:'right'}}></i></a>
                  </h4>
                </div>

                <div className="panel-collapse collapse" id="collapse11">
                  <div className="panel-body">
                    <p>We have spent countless hours testing and reviewing the vast number of antivirus companies across the web. TotalAV is our top choice, with Scanguard coming at a close second. It’s a brand new security suite that hit the market in 2017 and has impressed us in all aspects including their design and detection rate. </p>

                    <p>TotalAV’s scans were quick and thorough, we tested 30+ Antiviruses and it had the highest detection rate out of ALL these companies. We can say with confidence that Total AV has the performance that matches and beats the leading names in the antivirus business.</p>

                    <p>TotalAV has a quality support section on their website. They offer live chat with average connection time of under a minute. We tested some companies that didn’t even offer a live chat service! Their FAQ and knowledge sections are also great if you have a simple question that does not require contacting their live support. </p>

                    <p>TotalAV offers only one plan to choose from, which makes it pretty easy to make a decision. TotalAV also offers you to tailor the software to your needs, if you want a simple antivirus with no additional features, you can do that! They have listened to the consumers and don’t include gimmicky add-ons, but you can add them if you feel like you need them!</p>

                    <p>In conclusion, TotalAV may be new to the market but it has matched and beaten competitors in every way possible. This is great news because when they first launched, they were the underdogs of the business, but now they are on top!</p>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse12">Choosing The Best Antivirus Software <i className="fa fa-plus" style={{float:'right'}}></i></a>
                  </h4>
                </div>
                <div className="panel-collapse collapse" id="collapse12">
                  <div className="panel-body">
                    <p>We have spent countless hours testing and reviewing the vast number of antivirus companies across the web. TotalAV is our top choice, with Scanguard coming at a close second. It’s a brand new security suite that hit the market in 2017 and has impressed us in all aspects including their design and detection rate. </p>

                    <p>TotalAV’s scans were quick and thorough, we tested 30+ Antiviruses and it had the highest detection rate out of ALL these companies. We can say with confidence that Total AV has the performance that matches and beats the leading names in the antivirus business.</p>

                    <p>TotalAV has a quality support section on their website. They offer live chat with average connection time of under a minute. We tested some companies that didn’t even offer a live chat service! Their FAQ and knowledge sections are also great if you have a simple question that does not require contacting their live support. </p>

                    <p>TotalAV offers only one plan to choose from, which makes it pretty easy to make a decision. TotalAV also offers you to tailor the software to your needs, if you want a simple antivirus with no additional features, you can do that! They have listened to the consumers and don’t include gimmicky add-ons, but you can add them if you feel like you need them!</p>

                    <p>In conclusion, TotalAV may be new to the market but it has matched and beaten competitors in every way possible. This is great news because when they first launched, they were the underdogs of the business, but now they are on top!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
  componentDidMount() {

    $('.collapse').on('shown.bs.collapse', function(){
      $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function(){
      $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });

    $('.selectpicker').selectpicker();
    $('.rm-mustard').click(function() {
      $('.remove-example').find('[value=Mustard]').remove();
      $('.remove-example').selectpicker('refresh');
    });
    $('.rm-ketchup').click(function() {
      $('.remove-example').find('[value=Ketchup]').remove();
      $('.remove-example').selectpicker('refresh');
    });
    $('.rm-relish').click(function() {
      $('.remove-example').find('[value=Relish]').remove();
      $('.remove-example').selectpicker('refresh');
    });
    $('.ex-disable').click(function() {
      $('.disable-example').prop('disabled',true);
      $('.disable-example').selectpicker('refresh');
    });
    $('.ex-enable').click(function() {
      $('.disable-example').prop('disabled',false);
      $('.disable-example').selectpicker('refresh');
    });



    $(".panel-heading").click(function () {
      $(".accordion-toggle").addClass('open');
    });
    if ( $('.toggletag').hasClass('open') ) {
      $("html").click(function () {
        $(".toggletag").removeClass('open');
      });
    }




    jQuery(".accordion-toggle").click(function(){

      if(jQuery(this).hasClass("active")){
        jQuery(this).removeClass("active");

      }
      else{
        jQuery(this).addClass("active");
      }

    });
  }
}
export default Content;
