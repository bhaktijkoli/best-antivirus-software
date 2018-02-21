import React, { Component } from 'react';

class Feature extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var paras = this.props.data.description.split("$n");
    var no = 0;
    const listItems = paras.map((para) =>
    <p key={no++}>{para}</p>);
    return(
      <div className="row">
        <div className="ranti">
          <div className="col-md-3 col-sm-12 text-center"><img src="/images/t-thm.png" /></div>
          <div className="col-md-9 col-sm-12">
            <h3>{this.props.data.name}</h3>
            {listItems}
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}
export default Feature;
