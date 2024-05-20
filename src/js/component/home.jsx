import React, { useState } from "react";
import Calculator from "./Calculator";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8 offset-2 d-flex flex-column justify-space-around">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default Home;
