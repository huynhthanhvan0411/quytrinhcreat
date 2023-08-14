import React from "react";
import PropTypes from "prop-types";

function ChildFunc(props) {
  return (
    <div>
      <img src={props.productItem.srcImg} style={{ width: 350 }}></img>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.productItem.name}</h5>
          <p className="card-text">{props.productItem.des}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

ChildFunc.propTypes = {};

export default ChildFunc;
