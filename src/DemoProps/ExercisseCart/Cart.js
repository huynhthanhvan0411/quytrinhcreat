import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    let { gioHang } = this.props;
    return (
      <div>
        {/* modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: 1000 }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table classname="table">
                  <thead>
                    <tr>
                      <th>Mã Sp</th>
                      <th>Tên Sp</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
