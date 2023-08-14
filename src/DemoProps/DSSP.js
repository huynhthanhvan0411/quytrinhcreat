import React, { Component } from "react";
import dataPhone from "../Data/dataPhone.json";
import SP from "./SP";

export default class DSSP extends Component {
  mangSanPham = dataPhone;

  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  renderMangSanPham = () => {
    return this.mangSanPham.map((item, index) => {
      return (
        <div key={index} className="col-4">
          <SP xemChiTietProp={this.xemChiTiet} sanPhamProp={item} />
        </div>
      );
    });
  };
  xemChiTiet = (sanPham) => {
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">{this.renderMangSanPham()}</div>
          <div className="row">
            <div className="col-4">
              <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
              <img
                style={{ width: 250 }}
                src={this.state.sanPhamChiTiet.hinhAnh}
              ></img>
            </div>
            <div className="col-8">
              <h3> Thong so kix thuat</h3>
              <div className="table">
                <thead>
                  <tr>
                    <th>Màn hình</th>
                    <th>{this.state.sanPhamChiTiet.manHinh}</th>
                  </tr>
                  <tr>
                    <th>Hệ điều hành</th>
                    <th>{this.state.sanPhamChiTiet.heDieuHanh}</th>
                  </tr>
                  <tr>
                    <th>Camera trước</th>
                    <th>{this.state.sanPhamChiTiet.cameraTruoc}</th>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <th>{this.state.sanPhamChiTiet.cameraSau}</th>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <th>{this.state.sanPhamChiTiet.ram}</th>
                  </tr>
                  <tr>
                    <th>ROM</th>
                    <th>{this.state.sanPhamChiTiet.rom}</th>
                  </tr>
                </thead>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
