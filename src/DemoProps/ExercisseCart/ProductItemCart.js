import React, { Component } from "react";

export default class ProductItemCart extends Component {
  render() {
    let { sanPhamProp } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={sanPhamProp.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProp.tenSP}</h4>
          <p className="card-text">{sanPhamProp.giaBan}</p>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-success"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
