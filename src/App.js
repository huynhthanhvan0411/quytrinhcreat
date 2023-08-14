import React, { Component } from "react";
import DemoProps from "./DemoProps/DemoProps";
import ProductList from "./DemoProps/ProductList";
import dataJson from "./Data/Data.json";
import DSSP from "./DemoProps/DSSP";
import ExerciseCarStore from "./DemoProps/ExerciseCarStore/ExerciseCarStore";
import Exercisecart from "./DemoProps/ExercisseCart/Exercisecart";

export default class App extends Component {
  render() {
    return (
      // <div className="container-fluid">
      //   <div className="row">
      //     <div className="col-4">
      //       <div
      //         class="nav flex-column nav-pills justify-content-center"
      //         style={{ minHeight: 800 }}
      //         id="v-pills-tab"
      //         role="tablist"
      //         aria-orientation="vertical"
      //       >
      //         <a
      //           class="nav-link active"
      //           id="v-pills-home-tab"
      //           data-toggle="pill"
      //           href="#home"
      //           role="tab"
      //           aria-controls="home"
      //           aria-selected="true"
      //         >
      //           Home
      //         </a>
      //         <a
      //           class="nav-link"
      //           id="v-pills-shop-tab"
      //           data-toggle="pill"
      //           href="#shop"
      //           role="tab"
      //           aria-controls="shop"
      //           aria-selected="false"
      //         >
      //           Shop
      //         </a>
      //       </div>
      //     </div>
      //     <div className="productList col-8">
      //       <div className="tab-content" id="v-pills-tabContent">
      //         <div
      //           className="tab-pane fade show active"
      //           id="home"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-home-tab"
      //         >
      //           <ProductList arrProduct={dataJson} />
      //         </div>
      //         <div
      //           className="tab-pane fade"
      //           id="shop"
      //           role="tabpanel"
      //           aria-labelledby="v-pills-shop-tab"
      //         >
      //           Shop
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div>
        {/* <DSSP /> */}
        {/* <ExerciseCarStore /> */}
        <Exercisecart />
      </div>
    );
  }
}
