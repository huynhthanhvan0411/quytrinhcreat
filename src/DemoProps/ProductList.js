import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProductItem = () => {
    return this.props.arrProduct.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <ProductItem dataItem={item} />
        </div>
      );
    });
  };
  render() {
    console.log(this.props.arrProduct);
    return (
      <div>
        <div className="row w3-animate-zoom">{this.renderProductItem()}</div>
      </div>
    );
  }
}
