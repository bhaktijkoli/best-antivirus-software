import React, { Component } from 'react';

class Content extends Component {
  render() {
    return(
      <section className="content-part">
        <div className="container">
          <div className="col-md-9 col-sm-12 col-xs-12 padd-r-15">
            <div className="row">
              <form className="search-form">
                <div className="col-md-12 col-sm-12">
                  <div className="blog-img">
                    <img src="/images/blog-img.jpg" alt="" />
                    <div id="blog-description" dangerouslySetInnerHTML={{__html: this.props.data.description}}></div>
                    <div className="bott" style={{float:'left',marginLeft:'9px',marginBottom:'26px'}}>
                      <button type="button bott" className="btn visit-btn">{"<< PREVIOUS "}</button></div>
                      <div className="bott" style={{marginLeft:'9px',float:'right',marginBottom:'26px'}}>
                        <button type="button bott" className="btn visit-btn">{"  NEXT >>"}</button></div>
                        <div style={{clear:'both'}}></div>
                      </div>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="title mm">
                  <h2>Leave a reply</h2>
                  <p>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className="frm">
                  <div className="half">
                    <input type="text" name="" className="fom" placeholder="First Name"/>
                  </div>
                  <div className="half">
                    <input type="text" name="" className="fom" placeholder="Last Name"/>
                  </div>
                  <div className="half">
                    <input type="text" name="" className="fom" placeholder="Email Address"/>
                  </div>
                  <div className="half">
                    <input type="text" name="" className="fom" placeholder="Your Website"/>
                  </div>
                  <textarea  name="" className="jom" placeholder="Your Comments"></textarea>
                </div>
                <div className="bott" style={{marginLeft:'9px',marginBottom:'26px'}}>
                  <button type="button bott" className="btn visit-btn">POST COMMENT</button>
                </div>
              </div>
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="side-bar">
                    <div className="side-bar-clm blugh">
                      <div className="inner-content-b">
                        <div className="blog-t">
                          <h3>Catergories</h3>
                        </div>
                        <div className="blog-s">
                          <h4>Lorium Ipsium</h4>
                        </div>
                        <div className="blog-s">
                          <h4>Lorium Ipsium</h4>
                        </div>
                        <div className="blog-s">
                          <h4>Lorium Ipsium</h4>
                        </div>
                        <div className="blog-s">
                          <h4>Lorium Ipsium</h4>
                        </div>
                      </div></div>
                    </div>
                    <div className="side-bar-clm blugh">
                      <div className="inner-content-b">
                        <div className="blog-t">
                          <h3>Archieves</h3>
                        </div>
                        <div className="blog-s">
                          <h4>January 2018</h4>
                        </div>
                        <div className="blog-s">
                          <h4>January 2018</h4>
                        </div>
                      </div>
                    </div>
                    <div className="side-bar-clm blugh">
                      <div className="inner-content-b">
                        <div className="blog-t">
                          <h3>Social Links</h3>
                        </div>
                        <div className="blog-social-icons">
                          <a href="#"><img src="/images/f1.png"/></a>
                          <a href="#"><img src="/images/f2.png"/></a>
                          <a href="#"><img src="/images/f3.png"/></a>
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
