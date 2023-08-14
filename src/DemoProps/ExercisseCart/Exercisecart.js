import React, { Component } from "react";
import Cart from "./Cart";
import ProductListCart from "./ProductListCart";

export default class Exercisecart extends Component {
  state = {
    cart: [
      {
        maSP: 1,
        hinhAnh: "",
        tenSP: " ",
        soLuong: 1,
        donGia: 0,
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
          <div className="text-right">
            <span
              style={{ width: 17, cursor: "pointer" }}
              data-toggle="modal"
              data-target="#modelId"
            >
              <i className="fa fa-cart mr-5">
                <i class="fa fa-cart-arrow-down"></i>(0) Giỏ hàng
              </i>
            </span>
          </div>
          <Cart gioHang={this.state.cart} />
          <ProductListCart />
        </div>
      </div>
    );
  }
}
