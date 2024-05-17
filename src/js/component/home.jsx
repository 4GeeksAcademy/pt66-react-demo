import React, { useState } from "react";
import Board from "./Board.jsx";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8 offset-2 d-flex flex-column justify-space-around">
          <Board />
        </div>
      </div>
    </div>
  );
};

export default Home;
