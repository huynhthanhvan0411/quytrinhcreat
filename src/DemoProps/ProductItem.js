import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={this.props.dataItem.image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.dataItem.name}</h5>
            <h6>price: {this.props.dataItem.price}.000 </h6>
            <p className="card-text">{this.props.dataItem.description}</p>
            <button
              href="#"
              className="w3-btn w3-white w3-border w3-border-red w3-round-large"
            >
              view detail <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
