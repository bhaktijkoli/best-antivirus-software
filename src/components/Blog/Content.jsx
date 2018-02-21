import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Content extends Component {
  render() {
    return(
      <section className="content-part">
        <div className="container">
          <div className="col-md-12 col-sm-12 col-xs-12 padd-r-15">
            <div className="row">
              <form className="search-form fromm">
                <div className="col-md-3 col-sm-12 ft">
                  <div className="blogs-post">
                    <img src="/images/ddd.jpg" style={{width:'100%'}} />
                    <div className="">
                      <Link to="/blog/what-is-adware"><h3>What Is Adware? </h3></Link>
                      <p>Almost everyone deals with Adware now. Adware is a bit typical malware that... </p>

                    </div>
                    <div className="ruus">
                      <div className="cur" style={{borderRight:'1px solid'}}><h4>22 February 2018</h4> </div>
                      <div className="cur"><h4>3 mints read</h4> </div>
                      <div style={{clear:'both'}}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 ft">
                  <div className="blogs-post">
                    <img src="/images/ddd.jpg" style={{width:'100%'}}/>
                    <div className="">
                      <Link to="/blog/what-is-phishing"><h3>What Is Phishing?</h3></Link>

                      <p>Today’s world is surrounded by maliciouscybercrimes. Phishing is one of them ....</p>

                    </div>
                    <div className="ruus">
                      <div className="cur" style={{borderRight:'1px solid'}}><h4>22 February 2018</h4> </div>
                      <div className="cur"><h4>3 mints read</h4></div>
                      <div style={{clear:'both'}}></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 ft">
                  <div className="blogs-post">
                    <img src="/images/ddd.jpg" style={{width:'100%'}}/>
                    <div className="">
                      <Link to="/blog/how-dangerous-is-the-web-today"><h3>How Dangerous Is the Web Today</h3></Link>

                      <p>There is no doubt that internet is a wonderful tool for many ....  <br/></p>

                    </div>
                    <div className="ruus">
                      <div className="cur" style={{borderRight:'1px solid'}}><h4>22 February 2018</h4> </div>
                      <div className="cur"><h4>3 mints read</h4> </div>
                      <div style={{clear:'both'}}></div></div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12 ft">
                    <div className="blogs-post">
                      <img src="/images/ddd.jpg" style={{width:'100%'}}/>
                      <div className="">
                        <Link to="/blog/what-is-a-trojan-horse"><h3>What is a Trojan Horse?</h3></Link>

                        <p>There are so many threats lurking around the internet nowadays. If you are not...  </p>

                      </div>
                      <div className="ruus">
                        <div className="cur" style={{borderRight:'1px solid'}}><h4>22 February 2018</h4> </div>
                        <div className="cur"><h4>3 mints read</h4> </div>
                        <div style={{clear:'both'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12 ft">
                    <div className="blogs-post">
                      <img src="/images/ddd.jpg" style={{width:'100%'}}/>
                      <div className="">
                        <Link to="/blog/how-important-is-cybersecurity-in-this-day-and-age"><h3>How Important Is Cybersecurity In This Day And Age? </h3></Link>

                        <p>The security or protections of computer systems from any kind.... </p>

                      </div>
                      <div className="ruus">
                        <div className="cur" style={{borderRight:'1px solid'}}><h4>22 February 2018</h4> </div>
                        <div className="cur"><h4>3 mints read</h4> </div>
                        <div style={{clear:'both'}}></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
  export default Content;
