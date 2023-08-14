import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <img src={this.props.propSourcess} style={{ width: 350 }}></img>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.des}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
