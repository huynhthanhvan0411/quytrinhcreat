import React, { Component } from "react";
import Child from "./Child";
import ChildFunc from "./ChildFunc";

export default class Parents extends Component {
  product = {
    id: 1,
    srcImg:
      "https://product.hstatic.net/1000230642/product/dsmh05502trg__5__eb6191738e344e96a0e09f5378e24ea1_large.jpg",
    name: "dog duong func",
    descript: "loremrwegrhwueruqeuoryoiuqeytouiy",
  };

  render() {
    return (
      <div>
        {/* child class  */}
        {/* <Child
          propSourcess={this.srcImg}
          name={this.name}
          des={this.descript}
        /> */}
        {/* child func */}
        {/* <ChildFunc
          propSourcess={this.srcImg}
          name={this.name}
          des={this.descript}
        /> */}
        <ChildFunc productItem={this.product} />
      </div>
    );
  }
}
