import React, { Component } from "react";

export default class SP extends Component {
  render() {
    let { sanPhamProp } = this.this.props;
    return (
      <div className="card ">
        <img
          style={{ width: 250, height: 300 }}
          className="card-img-top"
          src={sanPhamProp.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPhamProp.tenSP}</h4>
          <p className="card-text">{sanPhamProp.manHinh}</p>
          <button
            onClick={() => {
              this.props.xemChiTietProp(sanPhamProp);
            }}
            className="btn-outline-primary"
          >
            View detail
          </button>
        </div>
      </div>
    );
  }
}
